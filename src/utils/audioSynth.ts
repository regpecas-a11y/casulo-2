// Safe, zero-external-dependency gentle ambient sound synthesizer (Web Audio API)
// Designed for soothing, low-level pink/brown noise and rain-like frequencies.

let audioCtx: AudioContext | null = null;
let noiseNode: AudioNode | null = null;
let gainNode: GainNode | null = null;

export const startAmbientSound = (soundType: 'chuva' | 'rosa' | 'brisa' | 'mar' = 'rosa', volume = 0.25) => {
  try {
    if (typeof window === 'undefined') return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    stopAmbientSound();

    // Create 3 seconds of looped pink/brownish gentle noise buffer
    const bufferSize = audioCtx.sampleRate * 3;
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      // Soft gentle pink-brown synthesis
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const whiteNoiseSource = audioCtx.createBufferSource();
    whiteNoiseSource.buffer = buffer;
    whiteNoiseSource.loop = true;

    // Filter depending on preset
    const filter = audioCtx.createBiquadFilter();
    if (soundType === 'chuva') {
      filter.type = 'lowpass';
      filter.frequency.value = 650;
    } else if (soundType === 'brisa') {
      filter.type = 'bandpass';
      filter.frequency.value = 400;
      filter.Q.value = 0.8;
    } else if (soundType === 'mar') {
      filter.type = 'lowpass';
      filter.frequency.value = 350;
    } else {
      // Pink
      filter.type = 'lowpass';
      filter.frequency.value = 500;
    }

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(volume * 0.2, audioCtx.currentTime);

    whiteNoiseSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    whiteNoiseSource.start();
    noiseNode = whiteNoiseSource;
  } catch (err) {
    console.warn("Ambient sound could not start, continuing visually:", err);
  }
};

export const stopAmbientSound = () => {
  try {
    if (noiseNode) {
      (noiseNode as AudioBufferSourceNode).stop();
      noiseNode.disconnect();
      noiseNode = null;
    }
  } catch (err) {
    // Ignore cleanup errors
  }
};
