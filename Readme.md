init the project with npm init

install react and react-dom with npm i react react-dom

next install babel for postprecessor
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
preset-env allows you use modern javascript features
preset-react transpiles our jsx to vanilla js
babel-loader an intermediary that connects babel to webpack

create the .babelrc file with  the presets

then install webpack
npm install webpack webpack-cli webpack-dev-server


npm install html-webpack-plugin to serve your html
point your plugin in webpack.config.js to ur index.html file