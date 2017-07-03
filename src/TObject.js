/**
 * Created by Doming on 2017/6/9.
 */
import Other from 'other';

export default class TObject {
  constructor(params) {}

  x = 0;
  y = 0;
  z = 0;
  rotationX = 0;
  rotationY = 0;
  rotationZ = 0;
  scaleX = 1;
  scaleY = 1;
  scaleZ = 1;
  width = 0;
  height = 0;
  depth = 0;
  __sort = ['X', 'Y', 'Z'];
  originX = '50%';
  originY = '50%';
  originZ = '0px';
  __orgO = {x: '50%', y: '50%', z: '0px'};
  __orgT = {x: '-50%', y: '-50%', z: '0px'};
  __orgF = {x: 0, y: 0, z: 0};
  children = [];
  prefix = Other.prefixCheck();

  position(x, y, z) {
    this.x = x || this.x;
    this.y = y || this.y;
    this.z = z || this.z;
    return this;
  }

  move(x, y, z) {
    this.x += x || 0;
    this.y += y || 0;
    this.z += z || 0;
    return this;
  }

  rotation(x, y, z) {
    this.rotationX = x || this.rotationX;
    this.rotationY = y || this.rotationY;
    this.rotationZ = z || this.rotationZ;
    return this;
  }

  rotate(x, y, z) {
    this.rotationX += x || 0;
    this.rotationY += y || 0;
    this.rotationZ += z || 0;
    return this;
  }

  scale(x, y, z) {
    this.scaleX = x || this.scaleX;
    this.scaleY = y || this.scaleY;
    this.scaleZ = z || this.scaleZ;
    return this;
  }

  size(width, height, depth) {
    switch (arguments.length) {
      case 1 :
        this.width = width;
        this.height = width;
        this.depth = width;
        break;
      case 2 :
        this.width = width;
        this.height = height;
        break;
      case 3 :
        this.width = width;
        this.height = height;
        this.depth = depth;
        break;
    }
    return this;
  }

  origin(x, y, z) {
    switch (arguments.length) {
      case 1 :
        this.originX = x;
        this.originY = x;
        this.originZ = x;
        break;
      case 2 :
        this.originX = x;
        this.originY = y;
        break;
      case 3 :
        this.originX = x;
        this.originY = y;
        this.originZ = z;
        break;
    }
    return this;
  }

  sort(s0, s1, s2) {
    if (arguments.length > 3) console.error('sort arguments is wrong!');
    this.__sort = [s0, s1, s2];
    return this;
  }

  addChild(view) {
    if (view.parent) view.parent.removeChild(view);
    if (view.__name !== '') {
      if (this[view.__name] !== undefined) console.log(view.__name + ' already exist!');
      this[view.__name] = view;
    }
    this.children.push(view);
    view.parent = this;
    return this;
  }

  removeChild(view) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i] === view) {
        if (view.__name !== '') delete this[view.__name];
        this.children.splice(i, 1);
        view.parent = null;
        return this;
      }
    }
    return this;
  }

  removeAllChild() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      let view = this.children[i];

      if (view.__name !== '') delete this[view.__name];
      view.parent = null;
    }
    this.children = [];
    return this;
  }

  remove() {
    if (this.parent !== null) {
      this.parent.removeChild(this);
    }
    return this;
  }

}
