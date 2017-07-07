/**
 * Created by Doming on 2017/6/21.
 */
import Sprite from 'sprite';
import Other from 'other';

export default class Triangle extends Sprite {
  constructor(param) {
    super(param);
  }

  update() {
    super.update.apply(this);
    this.updateF();
    return this;
  }

  updateS() {
    this.el.style.borderLeft = Other.fixed0(this.width) + 'px' + ' transparent solid';
    this.el.style.borderRight = Other.fixed0(this.width) + 'px' + ' transparent solid';
    this.el.style.borderBottom = Other.fixed0(this.height) + 'px' + ' solid';
    return this;
  }

  updateM() {
    if (!this.__mat) return this;

    for (let i in this.__mat) {
      switch (i) {
        case 'bothsides':
          this.el.style[this.prefix + 'BackfaceVisibility'] = this.__mat[i] ? 'visible' : 'hidden';
          this.el.style['backfaceVisibility'] = this.__mat[i] ? 'visible' : 'hidden';
          break;
        case 'image':
          this.el.style[this.prefix + 'BorderImage'] = this.__mat[i] !== '' ?
            ('url(' + this.__mat[i] + ')') : '';
          this.el.style['borderImage'] = this.__mat[i] !== '' ?
            ('url(' + this.__mat[i] + ')') : '';
          break;
        default:
          this.el.style['borderBottom'] += ' ' + this.__mat[i];
          break;
      }
    }
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
