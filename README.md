This repo demonstrates a failing pixi.js headless webworker with webpack5
# Install
```
npm install
```

# Run

```
npm start
```

This will launch the webpack dev server which can be accessed on `localhost:3000` open the browser console to view the failure.

The code in `src/index.js` creates a canvas element and a web worker. The canvas is passed to the webworker and then Pixi is initialized in the pixi.worker.js code.
