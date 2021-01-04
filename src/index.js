const canvas = document.createElement('canvas');
canvas.id = 'gameplay-canvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
canvas.style.width = '100%';
canvas.style.height = '100%';
document.body.appendChild(canvas);

const offscreen = canvas.transferControlToOffscreen();


const pixiWorker = new Worker(new URL('./pixi.worker.js', import.meta.url));


pixiWorker.postMessage({
  canvas: offscreen,
  width: window.innerWidth,
  height: window.innerHeight
}, [offscreen]);
