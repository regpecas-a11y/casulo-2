
// CASULO SLEEP SOUNDS - CORE ENGINE
// Usando exclusivamente Web Audio API para gerar sons procedurais

let audioCtx = null;
let currentNodes = [];
let timerInterval = null;
let wakeLock = null;
let activeSoundId = null;
let heartbeatTimer = null;

async function getCtx() {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;
      audioCtx = new AudioContextClass({
        sampleRate: 44100,
        latencyHint: 'playback'
      });
      
      const compressor = audioCtx.createDynamicsCompressor();
      compressor.threshold.setValueAtTime(-12, audioCtx.currentTime);
      compressor.knee.setValueAtTime(30, audioCtx.currentTime);
      compressor.ratio.setValueAtTime(4, audioCtx.currentTime);
      compressor.attack.setValueAtTime(0.003, audioCtx.currentTime);
      compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
      compressor.connect(audioCtx.destination);
      audioCtx.globalCompressor = compressor;

      const resume = async () => {
        try {
          if (audioCtx.state === 'suspended') await audioCtx.resume();
        } catch (e) {
          console.warn('AudioContext resume failed on interaction:', e);
        }
      };
      document.addEventListener('click', resume, { once: true });
      document.addEventListener('touchstart', resume, { once: true });
    }
    
    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }
    
    return audioCtx;
  } catch (err) {
    console.error('Error in getCtx:', err);
    return null;
  }
}

// Configura o MediaSession para permitir áudio em background e controles na tela de bloqueio
function setupMediaSession(title) {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: title || 'Som para Dormir',
      artist: 'Casulo',
      album: 'Relaxamento',
      artwork: [
        { src: window.location.origin + '/logo.png?v=5', sizes: '192x192', type: 'image/png' },
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => {
      if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    });
    navigator.mediaSession.setActionHandler('pause', () => {
      // Opcional: implementar pausa global se necessário
    });
    navigator.mediaSession.playbackState = 'playing';
  }
}

// Helper para criar ruído branco
function createWhiteNoiseBuffer(ctx) {
  const bufferSize = ctx.sampleRate * 4; // 4 segundos
  const buffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate); // 2 canais (estéreo)
  for (let channel = 0; channel < 2; channel++) {
    const data = buffer.getChannelData(channel);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
  }
  return buffer;
}

// CASULO SLEEP SOUNDS - RESUME
export const resumeAudioContext = async () => {
  try {
    const ctx = await getCtx();
    if (ctx && ctx.state === 'suspended') {
      await ctx.resume();
    }
  } catch (err) {
    console.warn('Erro ao retomar áudio:', err);
  }
};

// CASULO SLEEP SOUNDS - STOP ALL
export const stopAllSleepSounds = (fadeOutTime = 0.5) => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  if (heartbeatTimer) {
    clearInterval(heartbeatTimer);
    heartbeatTimer = null;
  }

  if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = 'paused';
  }

  if (!audioCtx) return;
  const ctx = audioCtx;
  const now = ctx.currentTime;

  const nodesToStop = [...currentNodes];
  currentNodes = [];
  activeSoundId = null;

  nodesToStop.forEach(node => {
    try {
      if (node instanceof GainNode) {
        node.gain.exponentialRampToValueAtTime(0.001, now + fadeOutTime);
      } else if (node.stop) {
        node.stop(now + fadeOutTime);
      }
    } catch (e) {
      // Fallback for nodes that don't support stop or gain
    }
  });

  // Limpeza após fade out
  setTimeout(() => {
    nodesToStop.forEach(node => {
      try {
        node.disconnect();
      } catch (err) {}
    });
  }, fadeOutTime * 1000 + 100);
  
  if (wakeLock) {
    wakeLock.release().then(() => {
      wakeLock = null;
    }).catch(err => {
      console.warn("WakeLock release failed:", err);
      wakeLock = null;
    });
  }
};

// CASULO SLEEP SOUNDS - UPDATE VOLUME
export const updateSleepVolume = async (volume) => {
  const ctx = await getCtx();
  const now = ctx.currentTime;
  currentNodes.forEach(node => {
    if (node instanceof GainNode && node.label === 'mainGain') {
      const multiplier = node.multiplier || 1.0;
      node.gain.setTargetAtTime(volume * multiplier, now, 0.1);
    }
  });
};

// CASULO SLEEP SOUNDS - UPDATE PARAM
export const updateSleepParam = async (param, value) => {
  const ctx = await getCtx();
  const now = ctx.currentTime;
  
  if (param === 'bpm' && activeSoundId === 'womb') {
    // The heartbeat interval is managed by setInterval in playWomb.
    // We need a way to update it without stopping the whole sound.
    // We'll use a global variable for bpm that the interval checks.
    window._casulo_womb_bpm = value;
    return;
  }

  currentNodes.forEach(node => {
    if (node instanceof BiquadFilterNode && node.label === 'paramFilter') {
      node.frequency.setTargetAtTime(value, now, 0.1);
    }
    if (node instanceof GainNode && node.label === 'paramGain') {
      node.gain.setTargetAtTime(value, now, 0.1);
    }
  });
};

// CASULO SLEEP SOUNDS - WOMB (ÚTERO)
export const playWomb = async (volume = 0.5, bpm = 60) => {
  if (activeSoundId === 'womb') {
    updateSleepVolume(volume);
    updateSleepParam('bpm', bpm);
    return;
  }
  
  stopAllSleepSounds();
  activeSoundId = 'womb';
  window._casulo_womb_bpm = bpm;
  
  const ctx = await getCtx();
  setupMediaSession('Som do Útero');
  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 2.4; // Aumentado para 2.4 para ainda mais volume
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);
  currentNodes.push(mainGain);
  
  // Camada 0: Sub-Bass (Profundidade extrema)
  const subOsc = ctx.createOscillator();
  const subGain = ctx.createGain();
  subOsc.type = 'sine';
  subOsc.frequency.value = 45; // Frequência muito baixa para vibração
  subGain.gain.value = 0.15;
  subOsc.connect(subGain);
  subGain.connect(mainGain);
  subOsc.start();
  currentNodes.push(subOsc, subGain);
  
  // Camada 1: Batimento Cardíaco (Mais encorpado)
  const playHeartbeat = () => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 65; // Frequência um pouco mais baixa para mais "peso"
    
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(1.5, now + 0.05); // Aumentado de 1.2 para 1.5
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    gain.gain.linearRampToValueAtTime(0, now + 0.45);
    
    osc.connect(gain);
    gain.connect(mainGain);
    osc.start();
    osc.stop(now + 0.6);
  };
  
  const runHeartbeat = () => {
    if (activeSoundId !== 'womb') return;
    playHeartbeat();
    const currentBpm = window._casulo_womb_bpm || 60;
    const interval = (60 / currentBpm) * 1000;
    heartbeatTimer = setTimeout(runHeartbeat, interval);
  };
  
  runHeartbeat();
  
  // Camada 2: Fluido Amniótico
  const noise = ctx.createBufferSource();
  noise.buffer = createWhiteNoiseBuffer(ctx);
  noise.loop = true;
  
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 350;
  filter.Q.value = 0.7;
  
  const noiseGain = ctx.createGain();
  noiseGain.gain.value = 0.35; // Aumentado de 0.18 para 0.35
  
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 0.12;
  lfoGain.gain.value = 0.08; // Mais modulação
  
  lfo.connect(lfoGain);
  lfoGain.connect(noiseGain.gain);
  
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(mainGain);
  
  lfo.start();
  noise.start();
  
  // Camada 3: Voz Materna / Fluxo Sanguíneo (Zumbido mais rico)
  const voice = ctx.createOscillator();
  const voiceGain = ctx.createGain();
  voice.type = 'sine';
  voice.frequency.value = 110;
  voiceGain.gain.value = 0.12; // Aumentado de 0.06 para 0.12
  
  voice.connect(voiceGain);
  voiceGain.connect(mainGain);
  voice.start();
  
  currentNodes.push(noise, lfo, voice, filter, noiseGain, voiceGain);
};

// CASULO SLEEP SOUNDS - WHITE NOISE
export const playWhiteNoise = async (volume = 0.5) => {
  if (activeSoundId === 'white') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'white';
  const ctx = await getCtx();
  setupMediaSession('Ruído Branco');
  const source = ctx.createBufferSource();
  source.buffer = createWhiteNoiseBuffer(ctx);
  source.loop = true;
  
  const gain = ctx.createGain();
  gain.label = 'mainGain';
  gain.multiplier = 2.0;
  gain.gain.value = volume * gain.multiplier;
  
  source.connect(gain);
  gain.connect(ctx.globalCompressor);
  source.start();
  
  currentNodes.push(source, gain);
};

// CASULO SLEEP SOUNDS - PINK NOISE
export const playPinkNoise = async (volume = 0.5, warmth = 0.5) => {
  if (activeSoundId === 'pink') {
    updateSleepVolume(volume);
    updateSleepParam('warmth', 4 * warmth);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'pink';
  const ctx = await getCtx();
  setupMediaSession('Ruído Rosa');
  const source = ctx.createBufferSource();
  source.buffer = createWhiteNoiseBuffer(ctx);
  source.loop = true;
  
  const lowShelf = ctx.createBiquadFilter();
  lowShelf.label = 'paramFilter';
  lowShelf.type = 'lowshelf';
  lowShelf.frequency.value = 500;
  lowShelf.gain.value = 4 * warmth;
  
  const highShelf1 = ctx.createBiquadFilter();
  highShelf1.type = 'highshelf';
  highShelf1.frequency.value = 4000;
  highShelf1.gain.value = -8;
  
  const highShelf2 = ctx.createBiquadFilter();
  highShelf2.type = 'highshelf';
  highShelf2.frequency.value = 10000;
  highShelf2.gain.value = -6;
  
  const gain = ctx.createGain();
  gain.label = 'mainGain';
  gain.multiplier = 2.0;
  gain.gain.value = volume * gain.multiplier;
  
  source.connect(lowShelf);
  lowShelf.connect(highShelf1);
  highShelf1.connect(highShelf2);
  highShelf2.connect(gain);
  gain.connect(ctx.globalCompressor);
  source.start();
  
  currentNodes.push(source, lowShelf, highShelf1, highShelf2, gain);
};

// CASULO SLEEP SOUNDS - BROWN NOISE
export const playBrownNoise = async (volume = 0.5, depth = 180) => {
  if (activeSoundId === 'brown') {
    updateSleepVolume(volume);
    updateSleepParam('depth', depth);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'brown';
  const ctx = await getCtx();
  setupMediaSession('Ruído Marrom');
  const source = ctx.createBufferSource();
  source.buffer = createWhiteNoiseBuffer(ctx);
  source.loop = true;
  
  const filter = ctx.createBiquadFilter();
  filter.label = 'paramFilter';
  filter.type = 'lowpass';
  filter.frequency.value = depth;
  filter.Q.value = 0.5;
  
  const boost = ctx.createGain();
  boost.gain.value = 2.5; // +8dB approx
  
  const gain = ctx.createGain();
  gain.label = 'mainGain';
  gain.multiplier = 2.0;
  gain.gain.value = volume * gain.multiplier;
  
  source.connect(filter);
  filter.connect(boost);
  boost.connect(gain);
  gain.connect(ctx.globalCompressor);
  source.start();
  
  currentNodes.push(source, filter, boost, gain);
};

// CASULO SLEEP SOUNDS - FREQUENCY (432Hz / 528Hz)
export const playFrequency = async (freq, volume = 0.3, vibratoLevel = 'suave') => {
  if (activeSoundId === `freq-${freq}`) {
    updateSleepVolume(volume);
    // Vibrato update would be more complex, skipping for now as it's less critical
    return;
  }

  stopAllSleepSounds();
  activeSoundId = `freq-${freq}`;
  const ctx = await getCtx();
  setupMediaSession(`Frequência ${freq}Hz`);
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  gain.label = 'mainGain';
  gain.multiplier = 1.0;
  osc.type = 'sine';
  osc.frequency.value = freq;
  
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(volume * gain.multiplier, now + 5);
  
  // Vibrato
  if (vibratoLevel !== 'off') {
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 5.5;
    lfoGain.gain.value = vibratoLevel === 'suave' ? 1.5 : 3;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    lfo.start();
    currentNodes.push(lfo, lfoGain);
  }
  
  osc.connect(gain);
  gain.connect(ctx.globalCompressor);
  osc.start();
  
  currentNodes.push(osc, gain);
};

// CASULO SLEEP SOUNDS - MIX (432Hz + PINK)
export const playMix = async (volume = 0.3) => {
  if (activeSoundId === 'mix') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'mix';
  const ctx = await getCtx();
  setupMediaSession('Mix Relaxante');
  
  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 2.0;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);
  
  // 432Hz
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 432;
  oscGain.gain.value = 0.6;
  osc.connect(oscGain);
  oscGain.connect(mainGain);
  osc.start();
  
  // Pink Noise
  const noise = ctx.createBufferSource();
  noise.buffer = createWhiteNoiseBuffer(ctx);
  noise.loop = true;
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 1000;
  const noiseGain = ctx.createGain();
  noiseGain.gain.value = 0.6;
  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(mainGain);
  noise.start();
  
  currentNodes.push(mainGain, osc, noise, oscGain, noiseGain, filter);
};

// CASULO SLEEP SOUNDS - RAIN (CHUVA SUAVE)
export const playRain = async (volume = 0.5) => {
  if (activeSoundId === 'rain') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'rain';
  const ctx = await getCtx();
  setupMediaSession('Chuva Suave');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 2.0;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  // Rain noise base
  const source = ctx.createBufferSource();
  source.buffer = createWhiteNoiseBuffer(ctx);
  source.loop = true;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.value = 1200;
  bandpass.Q.value = 0.5;

  const lowpass = ctx.createBiquadFilter();
  lowpass.type = 'lowpass';
  lowpass.frequency.value = 3000;

  // Modulate rain volume slightly for gusts of rain
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.value = 0.2;
  lfoGain.gain.value = 0.15;
  lfo.connect(lfoGain);
  lfoGain.connect(mainGain.gain);
  lfo.start();

  source.connect(bandpass);
  bandpass.connect(lowpass);
  lowpass.connect(mainGain);
  source.start();

  currentNodes.push(mainGain, source, bandpass, lowpass, lfo, lfoGain);
};

// CASULO SLEEP SOUNDS - OCEAN (MARÉ & ONDAS)
export const playOcean = async (volume = 0.5) => {
  if (activeSoundId === 'ocean') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'ocean';
  const ctx = await getCtx();
  setupMediaSession('Ondas do Mar');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 2.0;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  const source = ctx.createBufferSource();
  source.buffer = createWhiteNoiseBuffer(ctx);
  source.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 400;

  // Slow swell LFO for wave motion
  const waveLFO = ctx.createOscillator();
  const waveGain = ctx.createGain();
  waveLFO.frequency.value = 0.1; // 1 wave every 10 sec
  waveGain.gain.value = 350;

  waveLFO.connect(waveGain);
  waveGain.connect(filter.frequency);
  waveLFO.start();

  // Sub bass rumble
  const subOsc = ctx.createOscillator();
  const subGain = ctx.createGain();
  subOsc.type = 'sine';
  subOsc.frequency.value = 55;
  subGain.gain.value = 0.2;
  subOsc.connect(subGain);
  subGain.connect(mainGain);
  subOsc.start();

  source.connect(filter);
  filter.connect(mainGain);
  source.start();

  currentNodes.push(mainGain, source, filter, waveLFO, waveGain, subOsc, subGain);
};

// CASULO SLEEP SOUNDS - FAN (VENTILADOR)
export const playFan = async (volume = 0.5) => {
  if (activeSoundId === 'fan') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'fan';
  const ctx = await getCtx();
  setupMediaSession('Ventilador de Teto');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 2.0;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  // Air rumble
  const source = ctx.createBufferSource();
  source.buffer = createWhiteNoiseBuffer(ctx);
  source.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 250;

  // Motor hum
  const hum = ctx.createOscillator();
  const humGain = ctx.createGain();
  hum.type = 'triangle';
  hum.frequency.value = 60;
  humGain.gain.value = 0.15;

  hum.connect(humGain);
  humGain.connect(mainGain);
  hum.start();

  source.connect(filter);
  filter.connect(mainGain);
  source.start();

  currentNodes.push(mainGain, source, filter, hum, humGain);
};

// CASULO SLEEP SOUNDS - VACUUM (ASPIRADOR DE PÓ)
export const playVacuum = async (volume = 0.5) => {
  if (activeSoundId === 'vacuum') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'vacuum';
  const ctx = await getCtx();
  setupMediaSession('Aspirador de Pó Suave');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 1.8;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  const source = ctx.createBufferSource();
  source.buffer = createWhiteNoiseBuffer(ctx);
  source.loop = true;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = 'bandpass';
  bandpass.frequency.value = 450;
  bandpass.Q.value = 1.2;

  const motor = ctx.createOscillator();
  const motorGain = ctx.createGain();
  motor.type = 'sawtooth';
  motor.frequency.value = 120;
  motorGain.gain.value = 0.05;

  motor.connect(motorGain);
  motorGain.connect(mainGain);
  motor.start();

  source.connect(bandpass);
  bandpass.connect(mainGain);
  source.start();

  currentNodes.push(mainGain, source, bandpass, motor, motorGain);
};

// CASULO SLEEP SOUNDS - HEARTBEAT ONLY (BATIMENTO CARDÍACO MATERNO)
export const playHeartbeatOnly = async (volume = 0.5, bpm = 65) => {
  if (activeSoundId === 'heartbeat') {
    updateSleepVolume(volume);
    updateSleepParam('bpm', bpm);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'heartbeat';
  window._casulo_womb_bpm = bpm;

  const ctx = await getCtx();
  setupMediaSession('Batimento Cardíaco');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 2.2;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  const triggerBeat = () => {
    if (activeSoundId !== 'heartbeat') return;
    const now = ctx.currentTime;
    
    // Lub
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(70, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + 0.12);
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(1.2, now + 0.03);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    osc1.connect(gain1);
    gain1.connect(mainGain);
    osc1.start(now);
    osc1.stop(now + 0.2);

    // Dub
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(60, now + 0.15);
    osc2.frequency.exponentialRampToValueAtTime(35, now + 0.27);
    gain2.gain.setValueAtTime(0, now + 0.15);
    gain2.gain.linearRampToValueAtTime(0.9, now + 0.18);
    gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc2.connect(gain2);
    gain2.connect(mainGain);
    osc2.start(now + 0.15);
    osc2.stop(now + 0.35);

    const currentBpm = window._casulo_womb_bpm || 65;
    const interval = (60 / currentBpm) * 1000;
    heartbeatTimer = setTimeout(triggerBeat, interval);
  };

  triggerBeat();
  currentNodes.push(mainGain);
};

// CASULO SLEEP SOUNDS - LULLABY (CAIXA DE MÚSICA DE NINAR)
export const playLullaby = async (volume = 0.4) => {
  if (activeSoundId === 'lullaby') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'lullaby';
  const ctx = await getCtx();
  setupMediaSession('Música de Ninar');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 1.5;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  // Soothing pentatonic melody notes (C4, D4, E4, G4, A4, C5, D5, E5)
  const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];
  const melodyPattern = [0, 2, 3, 5, 4, 3, 2, 0, 3, 5, 7, 5, 3, 2, 0, 1];
  let noteIndex = 0;

  const playChimeNote = () => {
    if (activeSoundId !== 'lullaby') return;
    const now = ctx.currentTime;
    const freq = notes[melodyPattern[noteIndex % melodyPattern.length]];
    noteIndex++;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.4, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

    osc.connect(gain);
    gain.connect(mainGain);
    osc.start(now);
    osc.stop(now + 2.0);

    timerInterval = setTimeout(playChimeNote, 1200);
  };

  playChimeNote();
  currentNodes.push(mainGain);
};

// CASULO SLEEP SOUNDS - MOTHER MEDITATION (MEDITAÇÃO E DESACELERAÇÃO PARA A MÃE)
export const playGuidedMeditationMother = async (volume = 0.4) => {
  if (activeSoundId === 'motherMeditation') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'motherMeditation';
  const ctx = await getCtx();
  setupMediaSession('Meditação Guia para a Mãe');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 1.6;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  // Warm 432Hz Drone Base
  const osc1 = ctx.createOscillator();
  const osc1Gain = ctx.createGain();
  osc1.type = 'sine';
  osc1.frequency.value = 432;
  osc1Gain.gain.value = 0.35;
  osc1.connect(osc1Gain);
  osc1Gain.connect(mainGain);
  osc1.start();

  // Fifth harmonic (648Hz) soft warmth
  const osc2 = ctx.createOscillator();
  const osc2Gain = ctx.createGain();
  osc2.type = 'sine';
  osc2.frequency.value = 216; // Sub octave
  osc2Gain.gain.value = 0.25;
  osc2.connect(osc2Gain);
  osc2Gain.connect(mainGain);
  osc2.start();

  // Slow Breathing Wave LFO
  const breathLFO = ctx.createOscillator();
  const breathGain = ctx.createGain();
  breathLFO.frequency.value = 0.08; // ~12 sec breath cycle
  breathGain.gain.value = 0.15;
  breathLFO.connect(breathGain);
  breathGain.connect(mainGain.gain);
  breathLFO.start();

  currentNodes.push(mainGain, osc1, osc1Gain, osc2, osc2Gain, breathLFO, breathGain);
};

// CASULO SLEEP SOUNDS - BREATHING GUIDE 4-7-8 (GUIA DE RESPIRAÇÃO)
export const playBreathingGuideAudio = async (volume = 0.4) => {
  if (activeSoundId === 'breathingGuide') {
    updateSleepVolume(volume);
    return;
  }

  stopAllSleepSounds();
  activeSoundId = 'breathingGuide';
  const ctx = await getCtx();
  setupMediaSession('Respiração Guiada 4-7-8');

  const mainGain = ctx.createGain();
  mainGain.label = 'mainGain';
  mainGain.multiplier = 1.5;
  mainGain.gain.value = volume * mainGain.multiplier;
  mainGain.connect(ctx.globalCompressor);

  // Guided Tone shifting frequency for Inhale (4s), Hold (7s), Exhale (8s)
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.value = 300;

  const runBreathingCycle = () => {
    if (activeSoundId !== 'breathingGuide') return;
    const now = ctx.currentTime;

    // Inhale (4 sec): Pitch rises from 300 to 450
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.linearRampToValueAtTime(450, now + 4);
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.linearRampToValueAtTime(0.5, now + 4);

    // Hold (7 sec): Flat pitch
    osc.frequency.setValueAtTime(450, now + 4);
    gain.gain.setValueAtTime(0.5, now + 4);

    // Exhale (8 sec): Pitch lowers back from 450 to 300
    osc.frequency.setValueAtTime(450, now + 11);
    osc.frequency.linearRampToValueAtTime(300, now + 19);
    gain.gain.setValueAtTime(0.5, now + 11);
    gain.gain.linearRampToValueAtTime(0.1, now + 19);

    timerInterval = setTimeout(runBreathingCycle, 19000);
  };

  osc.connect(gain);
  gain.connect(mainGain);
  osc.start();

  runBreathingCycle();
  currentNodes.push(mainGain, osc, gain);
};

// CASULO SLEEP SOUNDS - WAKE LOCK
export const toggleWakeLock = async (enabled) => {
  if (enabled && 'wakeLock' in navigator) {
    try {
      wakeLock = await navigator.wakeLock.request('screen');
    } catch (err) {
      if (err.name === 'NotAllowedError') {
        console.warn("WakeLock disallowed by permissions policy. This is expected in some preview environments.");
      } else {
        console.error(`${err.name}, ${err.message}`);
      }
    }
  } else if (wakeLock) {
    try {
      await wakeLock.release();
      wakeLock = null;
    } catch (err) {
      wakeLock = null;
    }
  }
};
