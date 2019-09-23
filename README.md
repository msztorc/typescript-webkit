[![Build Status](https://travis-ci.org/msztorc/typescript-webkit.svg?branch=master)](https://travis-ci.org/msztorc/typescript-webkit)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://www.opensource.org/licenses/MIT)

# TypeScript Library Boilerplate
### Library Starter Kit for your Javascript/TypeScript projects


## ⭐️ Features

- TypeScript/JavaScript
- Sass/Css
- Webpack 4
- Babel 7
- Hot Reloading (`npm start` / `yarn start`)
- CSS Autoprefixer
- UMD exports, so your library works everywhere.
- Based on [CRA v3.0.0](https://github.com/facebook/create-react-app/releases/tag/v3.0.0) (For Vanilla JS libs or React libs)
- Jest unit testing
- Customizable file headers for your build
- Configurable `postinstall` message [(Example)](https://github.com/msztorc/typescript-webkit/blob/master/bin/postinstall)
- Weekly [dependabot](https://dependabot.com) dependency updates

## 📦 Getting Started

```
git clone https://github.com/msztorc/typescript-webkit.git myLib
npm install
```

## 💎 Customization

> Before shipping, make sure to:
1. Edit `LICENSE` file
2. Edit `package.json` information (These will be used to generate the headers for your built files)
3. Edit `library: "myLib"` with your library's export name in `./config/webpack.config.js`
4. Edit `./bin/postinstall` (If you would like to display a message on package install)

## 🚀 Deployment
1. `npm publish`
2. Your users can include your library as usual

### npm
```
import myLib from 'my-library';
import 'my-library/build/index.css' // If you import a css file in your library
...
```

### self-host/cdn
```
<link href="build/index.css" rel="stylesheet">
<script src="build/index.js"></script>

let myLib = window.myLib.default;
...
```

This is fork of js-library-boilerplate by Francisco Hodge https://github.com/hodgef/js-library-boilerplate.git

## License
MIT
