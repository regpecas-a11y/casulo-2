// CASULO SOUND - CORE
let audioCtx = null;
function getCtx() {
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) {
        console.warn('AudioContext not supported');
        return null;
      }
      audioCtx = new AudioContextClass({
        sampleRate: 44100,
        latencyHint: 'playback'
      });

      const resumeAudio = async () => {
        try {
          if (audioCtx && audioCtx.state === 'suspended') {
            await audioCtx.resume();
          }
        } catch (err) {
          console.warn('Erro ao retomar AudioContext:', err);
        }
      };
      document.addEventListener('touchstart', resumeAudio, { once: true });
      document.addEventListener('click', resumeAudio, { once: true });
    }
    return audioCtx;
  } catch (e) {
    console.error('Error initializing AudioContext:', e);
    return null;
  }
}

function canPlay() { 
  return !window.__casuloMuted && getCtx() !== null; 
}

function createNoiseBuffer(ctx) {
  const bufferSize = ctx.sampleRate * 0.5;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;
  return buffer;
}

// 1. playPageTurn() - White noise sweep
export const playPageTurn = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  const gain = ctx.createGain();
  noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  filter.frequency.setValueAtTime(2000, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.05);
  gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
  noise.start(); noise.stop(ctx.currentTime + 0.3);
};

// 2. playDiarySave() - Premium Confirmation (Nubank style)
export const playDiarySave = () => {
  playPositiveChime();
};

// 3. playMilestoneComplete() - Premium Arpeggio
export const playMilestoneComplete = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;
  [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => { // C5-E5-G5-C6
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + i * 0.1);
    gain.gain.setValueAtTime(0, now + i * 0.1);
    gain.gain.linearRampToValueAtTime(0.1, now + i * 0.1 + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.6);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + i * 0.1); osc.stop(now + i * 0.1 + 0.6);
  });
};

// 4. playXPGain() - Premium Frequency ramp
export const playXPGain = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(600, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.15);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.15);
};

// 5. playCameraClick() - Filtered noise + Low sine
export const playCameraClick = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass'; filter.frequency.value = 2000;
  const gain = ctx.createGain();
  noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
  noise.start(); noise.stop(ctx.currentTime + 0.15);
};

// 6. playOnboardingComplete() - C Major Chord
export const playOnboardingComplete = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  [261.63, 329.63, 392.00, 523.25].forEach(freq => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, ctx.currentTime + 0.7);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.1);
    osc.start(); osc.stop(ctx.currentTime + 1.1);
  });
};

// 7. playSoftClick() - Premium Navigation Click (iPhone style)
export const playSoftClick = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.05);
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.08);
};

// 8. playPositiveChime() - Premium Confirmation (Nubank style)
export const playPositiveChime = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;
  [880, 1108.73].forEach((freq, i) => { // A5, C#6
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + i * 0.08);
    gain.gain.setValueAtTime(0, now + i * 0.08);
    gain.gain.linearRampToValueAtTime(0.15, now + i * 0.08 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + i * 0.08); osc.stop(now + i * 0.08 + 0.25);
  });
};

// 9. playCancelSound() - Discrete Cancel
export const playCancelSound = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(220, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(180, ctx.currentTime + 0.1);
  gain.gain.setValueAtTime(0.08, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(); osc.stop(ctx.currentTime + 0.1);
};

// 10. playNotificationBell() - Elegant Bell
export const playNotificationBell = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;
  const freqs = [1200, 2400, 3600]; // Fundamental + Harmonics
  freqs.forEach((f, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.value = f;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.1 / (i + 1), now + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now); osc.stop(now + 1.5);
  });
};

// 11. playBiteSound() - Simulated bite sound
export const playBiteSound = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Noise burst for the "crunch"
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx);
  const noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = 'bandpass';
  noiseFilter.frequency.setValueAtTime(1000, now);
  const noiseGain = ctx.createGain();
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(ctx.destination);
  noiseGain.gain.setValueAtTime(0, now);
  noiseGain.gain.linearRampToValueAtTime(0.2, now + 0.01);
  noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
  noise.start(now);
  noise.stop(now + 0.1);

  // Low thump for the "impact"
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, now);
  osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
  oscGain.gain.setValueAtTime(0, now);
  oscGain.gain.linearRampToValueAtTime(0.3, now + 0.01);
  oscGain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.15);
};

// 12. playICQMessage() - Nostalgic "Uh-oh!" style chime
export const playICQMessage = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;
  
  // First note (higher)
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(1200, now);
  gain1.gain.setValueAtTime(0, now);
  gain1.gain.linearRampToValueAtTime(0.1, now + 0.02);
  gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
  osc1.connect(gain1); gain1.connect(ctx.destination);
  osc1.start(now); osc1.stop(now + 0.15);

  // Second note (lower)
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(800, now + 0.1);
  gain2.gain.setValueAtTime(0, now + 0.1);
  gain2.gain.linearRampToValueAtTime(0.1, now + 0.12);
  gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
  osc2.connect(gain2); gain2.connect(ctx.destination);
  osc2.start(now + 0.1); osc2.stop(now + 0.3);
};

// 13. playICQDoorOpen() - Simulated door opening
export const playICQDoorOpen = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(200, ctx.currentTime);
  filter.frequency.linearRampToValueAtTime(1000, ctx.currentTime + 0.4);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.1);
  gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.4);
  noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  noise.start(); noise.stop(ctx.currentTime + 0.4);
};

// 14. playICQDoorClose() - Simulated door closing
export const playICQDoorClose = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, ctx.currentTime);
  filter.frequency.linearRampToValueAtTime(100, ctx.currentTime + 0.2);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
  noise.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  noise.start(); noise.stop(ctx.currentTime + 0.2);
};

// 15. playTypewriterKey() - Mechanical click
export const playTypewriterKey = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Click part (high frequency)
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'square';
  osc.frequency.setValueAtTime(2500, now);
  osc.frequency.exponentialRampToValueAtTime(800, now + 0.03);
  oscGain.gain.setValueAtTime(0.04, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
  osc.connect(oscGain); oscGain.connect(ctx.destination);
  osc.start(now); osc.stop(now + 0.03);

  // Noise part (the "thud")
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1000, now);
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.02, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
  noise.connect(filter); filter.connect(noiseGain); noiseGain.connect(ctx.destination);
  noise.start(now); noise.stop(now + 0.05);
};

// 16. playICQStartup() - Nostalgic ICQ Startup
export const playICQStartup = () => {
  if (!canPlay()) return;
  const ctx = getCtx();
  const now = ctx.currentTime;
  const notes = [
    { freq: 523.25, time: 0 },    // C5
    { freq: 659.25, time: 0.15 }, // E5
    { freq: 783.99, time: 0.3 },  // G5
    { freq: 1046.50, time: 0.45 } // C6
  ];
  notes.forEach(note => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(note.freq, now + note.time);
    gain.gain.setValueAtTime(0, now + note.time);
    gain.gain.linearRampToValueAtTime(0.1, now + note.time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, now + note.time + 0.4);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(now + note.time); osc.stop(now + note.time + 0.4);
  });
};
