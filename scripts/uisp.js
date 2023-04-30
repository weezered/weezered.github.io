function ballsack() {
  const sound = new Audio('/silly.mp3');
  sound.loop = true;
  sound.play();
}
ballsack();
window.addEventListener('load', ballsack);
