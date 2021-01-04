import * as Pixi from 'pixi.js'

self.addEventListener('message', (messaage) => {
  if(!message.canvas) return;

  const pixi = new Pixi.Application({
    width: message.width,
    height: message.height,
    view: message.canvas
  });
});
