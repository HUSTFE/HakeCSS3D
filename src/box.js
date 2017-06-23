/**
 * Created by Doming on 2017/6/19.
 */
import Sprite from 'sprite';
import Plane from 'plane';
import Other from 'other';

export default class Box extends Sprite {
  constructor(params) {
    super(params);

    this.front = new Plane();
    this.front.name = 'front';
    this.addChild(this.front);

    this.back = new Plane();
    this.back.name = 'back';
    this.addChild(this.back);

    this.left = new Plane();
    this.left.name = 'left';
    this.addChild(this.left);

    this.right = new Plane();
    this.right.name = 'right';
    this.addChild(this.right);

    this.up = new Plane();
    this.up.name = 'up';
    this.addChild(this.up);

    this.down = new Plane();
    this.down.name = 'down';
    this.addChild(this.down);
  }

  update() {
    super.update.apply(this);
    this.updateF();
    return this;
  }

  updateS() {
    let _w = Other.fixed0(this.width);
    let _h = Other.fixed0(this.height);
    let _d = Other.fixed0(this.depth);

    this.__orgF.x = this.width / 2;
    this.__orgF.y = this.height / 2;
    this.__orgF.z = this.depth / 2;

    this.front.size(_w, _h, 0).position(0, 0, _d / 2).rotation(0, 0, 0).updateS().updateT();
    this.back.size(_w, _h, 0).position(0, 0, -_d / 2).rotation(0, 180, 0).updateS().updateT();
    this.left.size(_d, _h, 0).position(-_w / 2, 0, 0).rotation(0, -90, 0).updateS().updateT();
    this.right.size(_d, _h, 0).position(_w / 2, 0, 0).rotation(0, 90, 0).updateS().updateT();
    this.up.size(_w, _d, 0).position(0, -_h / 2, 0).rotation(90, 0, 0).updateS().updateT();
    this.down.size(_w, _d, 0).position(0, _h / 2, 0).rotation(-90, 0, 0).updateS().updateT();

    return this;
  }

  updateM() {
    if (!this.__mat) return this;

    let _unique = true;

    for (let i in this.__mat) {
      switch (i) {
        case 'front':
        case 'back':
        case 'left':
        case 'right':
        case 'up':
        case 'down':
          if (this.__mat[i].bothsides === undefined) this.__mat[i].bothsides = false;
          this[i].material(this.__mat[i]).updateM();
          _unique = false;
          break;
      }
    }

    if (_unique) {
      if (this.__mat.bothsides === undefined) this.__mat.bothsides = false;
      this.front.material(this.__mat).updateM();
      this.back.material(this.__mat).updateM();
      this.left.material(this.__mat).updateM();
      this.right.material(this.__mat).updateM();
      this.up.material(this.__mat).updateM();
      this.down.material(this.__mat).updateM();
    }

    return this;
  }

  updateF() {
    if (!this.__flt) return this;

    this.front.filter(this.__flt).updateF();
    this.back.filter(this.__flt).updateF();
    this.left.filter(this.__flt).updateF();
    this.right.filter(this.__flt).updateF();
    this.up.filter(this.__flt).updateF();
    this.down.filter(this.__flt).updateF();

    return this;
  }

  updateV() {
    this.front.el.style.opacity = this.alpha;
    this.back.el.style.opacity = this.alpha;
    this.left.el.style.opacity = this.alpha;
    this.right.el.style.opacity = this.alpha;
    this.up.el.style.opacity = this.alpha;
    this.down.el.style.opacity = this.alpha;

    this.el.style.display = this.visible ? 'block' : 'none';
    return this;
  }

  filter(obj) {
    this.__flt = obj;
    return this;
  }

}
