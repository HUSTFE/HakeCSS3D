# Hake CSS3D Renderer
[![](https://travis-ci.org/mxz96102/HakeCSS3D.svg?branch=master)](https://travis-ci.org/mxz96102/HakeCSS3D) [![npm version](https://img.shields.io/npm/v/hake-css3d.svg?style=flat)](https://www.npmjs.com/package/hake-css3d)
> This project inspired by [Shrek.Wang](https://github.com/shrekshrek)'s css3d-engine

## What is this
This is a 3d renderer using css3 to make web page view, it's based on [Shrek.Wang](https://github.com/shrekshrek)'s css3d-engine. Using ES6 to write make it can import using ES6;
Now it can render simple items like plane and box, more item will join in the future.

## How to use
You can clone this repository to use webpack build, or using the lib folder js.min to use;

After you install and import this library.

### Common Function
- x.position(x,(y,z))
- x.move(x,(y,z))
- x.rotation(x,(y,z))
- x.rotate(x,(y,z))
- x.scale(x,(y,z))

### Stage
```javascript
// You should get a instance of root component first;
var h3 = new HakeCSS3D();
// Then use instance to create a stage;
var stage = new h3.Stage();
// Define basic information for your stage;
stage.size(window.innerWidth, window.innerHeight)
      .material({
            color : "#cccccc"
          })
      .update();
//Then mount it on a exist el;
document.getElementById('main').appendChild(stage.el);
```
Stage represent a single view of 3d scene, it's a container for other Elements.
For stage, we not recommend to transform so only set its material and size is fine.


## TODO List
1. Add more item to use and create.
2. ......
