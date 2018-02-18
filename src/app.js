console.log('App.js is running!')

// JSX - Javascript XML
var template = <h1>Indecision</h1>
var appRoot = document.getElementById('appRoot')

ReactDOM.render(template, appRoot)

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch