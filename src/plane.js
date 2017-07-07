/**
 * Created by Doming on 2017/6/19.
 */
import Sprite from 'sprite';
import Other from 'other';

export default class Plane extends Sprite {
  constructor(params) {
    super(params);
  }

  update() {
    super.update.apply(this);
    this.updateF();
    return this;
  }

  updateS() {
    this.el.style.width = Other.fixed0(this.width) + 'px';
    this.el.style.height = Other.fixed0(this.height) + 'px';
    return this;
  }

  updateF() {
    if (!this.__flt) return this;

    let _flt = '';

    for (let i in this.__flt) {
      _flt += (this.__flt[i] !== '' ? (i + '(' + this.__flt[i].join(',') + ')') : '');
    }

    if (_flt !== '') {
      this.el.style[this.prefix + 'Filter'] = _flt;
      this.el.style['filter'] = _flt;
    }

    return this;
  }

  filter(obj) {
    this.__flt = obj;
    return this;
  }
}
