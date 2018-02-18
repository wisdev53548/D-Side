'use strict';

console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'h1',
  null,
  'Indecision'
);
var appRoot = document.getElementById('appRoot');

ReactDOM.render(template, appRoot);

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
