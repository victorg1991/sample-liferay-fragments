function init() {
  const block = fragmentElement.querySelector('.block-with-config');
  block.style.backgroundColor = randomColor({ luminosity: 'dark' });
}

if ('randomColor' in window) {
  init();
} else {
  const randomColorScript = document.createElement('script');
  randomColorScript.src = 'https://unpkg.com/randomcolor@0.5.4/randomColor.js';
  randomColorScript.onload = init;
  document.body.appendChild(randomColorScript);
}
