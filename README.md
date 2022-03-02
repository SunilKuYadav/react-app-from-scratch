# react-app-from-scratch

This repository have a react app setup or configure from scratch.

so we are going to following these steps...

## Part 1

1. ``` npm init ```
    This commond will be initialize our project by creating ```package.json``` file.

2. Install React dependencies
    use the following commond 
    ```npm install react react-dom```

    After running above script node_modules folder, packege-lock.json file and react, react-dom will be added in package.json folder as dependency.

3. create ```.gitignore``` file on root folder and add node_modules folder in that so we stop tracking our node_modules file because it is havy file and can be generated with the help of package.json file using commond ```npm install```.

4. Install Webpack dependencies
    WEBPACK is used for bundling all the javascript files in our project and prepares all the necessary resources for usage in the browser.
    we will install ```webpack``` the bundler and ```webpack-cli``` CLI for webpack.
    use folling script

    ```npm install --save-dev webpack webpack-cli```

    the webpack and webpack-cli will be added in devDependency of package.json

5. Install Babel dependencies
    Bable is a javascript compiler that converts JS ES5+ to JS.
    we will be istalling ```@babel/core``` that is babel compiler core and ```@babel/preset-react``` that is a package that contains a set of plugins used to support React features.
    use following script 

    ```npm install --save-dev @babel/core @babel/preset-react```

    the @babel/core and @babel/preset-react will be added in devDependence in package.json file.

6. create ```.babelrc``` at root folder
    and add following code

    ```
    {
        "presets": [
            "@babel/preset-react"
        ]
    }
    ```

7. create ```webpack.config.js``` at root folder
    and add folloeing code

    ```
    const path = require("path");
    const webpack = require("webpack");

    module.exports = {
        entry: './src/index.jsx',
        mode: 'development',
        output: {
            filename: 'bundle.js',
            path: path.resolve("dist"),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: "babel-loader",
                }
            ]
        }
    }
    ```

8. create ```public/index.html``` and add a mount point and add your build script path

    in may case 
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>React App From Scratch</title>
    </head>
    <body>
        <div id="root"></div>
    
        <!-- The bundle-name should be same as you defined in webpack config file -->
        <script src="../dist/bundle.js"></script>
    </body>
    </html>
    ```

9. create ```src/index.jsx``` and ```src/App.js``` and add few code in that

    scr/index.jsx
    ```
    import React from 'react';
    import ReactDOM from 'react-dom';

    import App from './App.jsx';

    ReactDOM.render(
        <App />,
        document.querySelector('#root')
    )
    ```

    src/App.jsx
    ```
    import React from 'react'

    const App = () => {

    return (
        <div>
            <h1>React App From Scratch</h1>
        </div>
    )
    }

    export default App
    ```

10. now you just have to add scripts in package.json in order to build and start

    ```
    "build": "webpack",
    "start": "webpack",
    ```

## Part 2

1. befor starting this section we need to install few libraries.

    Aready installed libararies are
    ```
    react
    ``` : A JS libary.
    ```
    react-dom
    ``` : Serve as entry point to the DOM and serve re-renders for react
    ```
    @babel/core
    ``` : used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
    ```
    babel/preset-react
    ``` : Extends babel support for JSX.
    ```
    babel-loader
    ``` : Works with webpack to transpile ES6+ into ES5 which is supported by older browsers.
    ```
    webpack
    ``` : bundles all our files into one file.
    ```
    webpack-cli
    ``` : webpack CLI provides a flexible set of commonds for developer to increase speed when setting up a custome webpack project.

    Install new libraries 
    ```
    npm install html-webpack-plugin webpack-dev-server css-loader style-loader @babel/plugin-proposal-class-properties -D
    ```

    ```
    html-webpack-plugin
    ``` : Simplifies the creation of HTML files to d=serve your webpack bundles.
    ```
    webpack-dev-server
    ``` : Allows you to use webpack with a development server that proide live-reloading and hot-reloading.
    ```
    css-loader
    ``` : Allow webpack to covert the CSS file into a Javascript string.
    ```
    style-loader
    ``` : Inserts the javascript string into HTML DOM.
    ```
    @babel/plugin-proposal-class-properties
    ``` : This plugin transforms static class properties as well as properties declared with the property initializer syntax.

2. 

