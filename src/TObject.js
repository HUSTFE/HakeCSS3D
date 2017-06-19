/**
 * Created by Doming on 2017/6/9.
 */
import Other from 'other';

export default class TObject {
  constructor(...opt) {
    this.initialize.apply(this, opt);
  }

  position(x, y, z) {
    this.x = !x ? this.x : x;
    this.y = !y ? this.y : y;
    this.z = !z ? this.z : z;
    return this;
  }

  move(x, y, z) {
    this.x += !x ? 0 : x;
    this.y += !y ? 0 : y;
    this.z += !z ? 0 : z;
    return this;
  }

  rotation(x, y, z) {
    this.rotationX = !x ? this.rotationX : x;
    this.rotationY = !y ? this.rotationY : y;
    this.rotationZ = !z ? this.rotationZ : z;
    return this;
  }

  rotate(x, y, z) {
    this.rotationX += !x ? 0 : x;
    this.rotationY += !y ? 0 : y;
    this.rotationZ += !z ? 0 : z;
    return this;
  }

  scale(x, y, z) {
    this.scaleX = !x ? this.scaleX : x;
    this.scaleY = !y ? this.scaleY : y;
    this.scaleZ = !z ? this.scaleZ : z;
    return this;
  }

  size(width, height, depth) {
    this.width = !width ? this.width : width;
    this.height = !height ? this.height : height;
    this.depth = !depth ? this.depth : depth;
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
    if (view.parent !== null) view.parent.removeChild(view);
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

  initialize() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.scaleZ = 1;
    this.width = 0;
    this.height = 0;
    this.depth = 0;
    this.__sort = ['X', 'Y', 'Z'];
    this.originX = '50%';
    this.originY = '50%';
    this.originZ = '0px';
    this.__orgO = {x: '50%', y: '50%', z: '0px'};
    this.__orgT = {x: '-50%', y: '-50%', z: '0px'};
    this.__orgF = {x: 0, y: 0, z: 0};
    this.children = [];
    this.prefix = Other.prefixCheck();
  }
}
