# react-app-from-scratch

This repository have a react app setup or configure from scratch.

so we are going to following steps...

1. npm init
    This commond will be initialize our project by creating package.json file.

2. Install React dependencies
    use the following commond 
    npm install react react-dom

    After running above script node_modules folder, packege-lock.json file and react, react-dom will be added in package.json folder as dependency.

3. create .gitignore file on root folder and add node_modules folder in that so we stop tracking our node_modules file because it is havy file and can be generated with the help of package.json file using commond "npm install".

4. Install Webpack dependencies
    WEBPACK is used for bundling all the javascript files in our project and prepares all the necessary resources for usage in the browser.
    we will install "webpack" the bundler and "webpack-cli" CLI for webpack.
    use folling script

    npm install --save-dev webpack webpack-cli

    the webpack and webpack-cli will be added in devDependency of package.json

5. Install Babel dependencies
    Bable is a javascript compiler that converts JS ES5+ to JS.
    we will be istalling "@babel/core" that is babel compiler core and "@babel/preset-react" that is a package that contains a set of plugins used to support React features.
    use following script 

    npm install --save-dev @babel/core @babel/preset-react

    the @babel/core and @babel/preset-react will be added in devDependence in package.json file.

6.