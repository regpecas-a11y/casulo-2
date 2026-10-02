
// CASULO DAILY FEED - Sound Service
export const playMilestoneComplete = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3');
  audio.play().catch(e => console.log("Sound play blocked"));
};

export const playXPGain = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3');
  audio.play().catch(e => console.log("Sound play blocked"));
};

export const playOnboardingComplete = () => {
  const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2018/2018-preview.mp3');
  audio.play().catch(e => console.log("Sound play blocked"));
};
