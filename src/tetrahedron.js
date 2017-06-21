/**
 * Created by Doming on 2017/6/21.
 */
import Sprite from 'sprite';
import Triangle from 'triangle';
import Other from 'other';

export default class Tetrahedron extends Sprite {
  constructor(param) {
    super(param);
    console.warn('this component haven\'t finished yet, please don\'t use');

    this.sideA = new Triangle();
    this.sideA.name = 'sideA';
    this.addChild(this.sideA);

    this.sideB = new Triangle();
    this.sideB.name = 'sideB';
    this.addChild(this.sideB);

    this.sideC = new Triangle();
    this.sideC.name = 'sideC';
    this.addChild(this.sideC);

    this.bottom = new Triangle();
    this.bottom.name = 'sideA';
    this.addChild(this.bottom);
  }

  update() {
    super.update.apply(this);
    this.updateF();
    return this;
  }
  updateS() {
    let _w = Other.fixed0(this.width * 0.866 / 2);
    let _h = Other.fixed0(this.width);

    this.__orgF.x = this.width / 2;
    this.__orgF.y = _w * 0.57735;
    this.__orgF.z = _w * 0.2041;

    this.sideA.size(_w, _h, 0).position(0, 0, 0).rotation(0, 70.5, 30).updateS().updateT();
    this.sideB.size(_w, _h, 0).position(0, 0, 0).rotation(0, 70.5, 150).updateS().updateT();
    this.sideC.size(_w, _h, 0).position(0, 0, 0).rotation(0, 70.5, 270).updateS().updateT();
    this.bottom.size(_w, _h, 0).position(this.__orgF.x, 0, 0).rotation(90, 0, 90).updateS().updateT();

    return this;
  }

  updateM() {
    if (!this.__mat) return this;

    let _unique = true;

    for (let i in this.__mat) {
      switch (i) {
        case 'sideA':
        case 'sideB':
        case 'sideC':
        case 'bottom':
          if (this.__mat[i].bothsides === undefined) this.__mat[i].bothsides = false;
          this[i].material(this.__mat[i]).updateM();
          _unique = false;
          break;
      }
    }

    if (_unique) {
      if (this.__mat.bothsides === undefined) this.__mat.bothsides = false;
      this.sideA.material(this.__mat).updateM();
      this.sideB.material(this.__mat).updateM();
      this.sideC.material(this.__mat).updateM();
      this.bottom.material(this.__mat).updateM();
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

  filter(obj) {
    this.__flt = obj;
    return this;
  }

}
