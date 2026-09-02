// Web image-sequence animation
const frames = Array.from({length: 16}, (_, i) =>
  `/web-animation-keyframes/keyframe_${String(i).padStart(2, '0')}.webp`
);

const img = document.querySelector('#keyboard-animation');
let i = 0;
function playSequence() {
  img.src = frames[i];
  i = (i + 1) % frames.length;
  setTimeout(playSequence, 1000 / 12); // ~12 FPS
}
playSequence();
