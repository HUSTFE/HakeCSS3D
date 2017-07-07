/**
 * Created by Doming on 2017/6/19.
 */
import TObject from 'TObject';
import Other from 'other';

export default class Sprite extends TObject {
  constructor(params) {
    super(params);

    this.__name = '';
    this.__id = '';
    this.__class = '';

    this.alpha = 1;
    this.visible = true;

    let _dom;

    if (params && params.el) {
      switch (typeof params.el) {
        case 'string':
          _dom = document.createElement('div');
          _dom.innerHTML = params.el;
          break;
        case 'object':
          if (params.el.nodeType === 1) {
            _dom = params.el;
          }
          break;
      }
    }

    if (!_dom) {
      _dom = document.createElement('div');
    }

    _dom.style.position = 'absolute';
    _dom.style[this.prefix + 'Transform'] = 'translateZ(0px)';
    _dom.style[this.prefix + 'TransformStyle'] = 'preserve-3d';
    _dom.style['transform'] = 'translateZ(0px)';
    _dom.style['transformStyle'] = 'preserve-3d';
    this.el = _dom;
    _dom.le = this;
  }

  name(str) {
    this.__name = str;
    if (str === '') delete this.el.dataset.name;
    else this.el.dataset.name = str;
    return this;
  }

  id(str) {
    this.__id = str;
    this.el.id = str;
    return this;
  }

  class(str) {
    this.__class = str;
    this.el.className = str;
    return this;
  }

  update() {
    this.updateS();
    this.updateM();
    this.updateO();
    this.updateT();
    this.updateV();
    return this;
  }

  updateS() {
    //  this.el.style[this.prefix + 'TransformOrigin'] = '50% 50%';
    return this;
  }

  /**
   * @description To update material of this
   **/

  updateM() {
    if (!this.__mat) return this;

    for (let i in this.__mat) {
      switch (i) {
        case 'bothsides':
          this.el.style[this.prefix + 'BackfaceVisibility'] = this.__mat[i] ? 'visible' : 'hidden';
          this.el.style['backfaceVisibility'] = this.__mat[i] ? 'visible' : 'hidden';
          break;
        case 'image':
          this.el.style['background' + Other.firstUpper(i)] = this.__mat[i] !== '' ?
            ('url(' + this.__mat[i] + ')') : '';
          break;
        default:
          this.el.style['background' + Other.firstUpper(i)] = this.__mat[i];
          break;
      }
    }

    return this;
  }

  /**
   * @description To update origin of this
   * */

  updateO() {
    if (typeof (this.originX) === 'number') {
      let _x = Other.fixed0(this.originX - this.__orgF.x);

      this.__orgO.x = _x + 'px';
      this.__orgT.x = -_x + 'px';
    } else {
      this.__orgO.x = this.originX;
      this.__orgT.x = '-' + this.originX;
    }

    if (typeof (this.originY) === 'number') {
      let _y = Other.fixed0(this.originY - this.__orgF.y);

      this.__orgO.y = _y + 'px';
      this.__orgT.y = -_y + 'px';
    } else {
      this.__orgO.y = this.originY;
      this.__orgT.y = '-' + this.originY;
    }

    if (typeof (this.originZ) === 'number') {
      let _z = Other.fixed0(this.originZ - this.__orgF.z);

      this.__orgO.z = _z + 'px';
      this.__orgT.z = -_z + 'px';
    } else {
      this.__orgO.z = this.__orgT.z = '0px';
    }

    this.el.style[this.prefix + 'TransformOrigin'] = this.__orgO.x + ' ' + this.__orgO.y + ' ' + this.__orgO.z;
    this.el.style['transformOrigin'] = this.__orgO.x + ' ' + this.__orgO.y + ' ' + this.__orgO.z;

    return this;
  }

  /**
   * @description To update Transform by sort order
   * */

  updateT() {
    let [_S0, _S1, _S2] = this.__sort;

    this.el.style[this.prefix + 'Transform'] =
      'translate3d(' + this.__orgT.x + ', ' + this.__orgT.y + ', ' + this.__orgT.z + ') ' +
      'translate3d(' + Other.fixed2(this.x) + 'px,' + Other.fixed2(this.y) + 'px,' + Other.fixed2(this.z) + 'px) ' +
      'rotate' + _S0 + '(' + Other.fixed2(this['rotation' + _S0]) % 360 + 'deg) ' +
      'rotate' + _S1 + '(' + Other.fixed2(this['rotation' + _S1]) % 360 + 'deg) ' +
      'rotate' + _S2 + '(' + Other.fixed2(this['rotation' + _S2]) % 360 + 'deg) ' +
      'scale3d(' + Other.fixed2(this.scaleX) + ', ' +
      Other.fixed2(this.scaleY) + ', ' + Other.fixed2(this.scaleZ) + ') ';
    this.el.style['transform'] = 'translate3d(' + this.__orgT.x + ', ' + this.__orgT.y + ', ' + this.__orgT.z + ') ' +
      'translate3d(' + Other.fixed2(this.x) + 'px,' + Other.fixed2(this.y) + 'px,' + Other.fixed2(this.z) + 'px) ' +
      'rotate' + _S0 + '(' + Other.fixed2(this['rotation' + _S0]) % 360 + 'deg) ' +
      'rotate' + _S1 + '(' + Other.fixed2(this['rotation' + _S1]) % 360 + 'deg) ' +
      'rotate' + _S2 + '(' + Other.fixed2(this['rotation' + _S2]) % 360 + 'deg) ' +
      'scale3d(' + Other.fixed2(this.scaleX) + ', ' +
      Other.fixed2(this.scaleY) + ', ' + Other.fixed2(this.scaleZ) + ') ';

    return this;
  }

  /**
   * @description To update display and opacity.
   * */

  updateV() {
    this.el.style.opacity = this.alpha;
    this.el.style.display = this.visible ? 'block' : 'none';
    return this;
  }

  addChild(view) {
    super.addChild.apply(this, [view]);
    if (this.el && view.el) {
      this.el.appendChild(view.el);
    }
    return this;
  }

  removeChild(view) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i] === view) {
        if (view.__name !== '') delete this[view.__name];
        this.children.splice(i, 1);
        view.parent = null;
        this.el.removeChild(view.el);
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
      this.el.removeChild(view.el);
    }
    this.children = [];
    return this;
  }

  /**
   * @param events Object
   * @description To add listener for an object
   * */

  on(events) {
    if (typeof (events) === 'object') {
      for (let i in events) {
        this.el.addEventListener(i, events[i], false);
      }
    } else if (arguments.length === 2) {
      this.el.addEventListener(arguments[0], arguments[1], false);
    } else if (arguments.length === 3) {
      this.el.addEventListener(arguments[0], arguments[1], arguments[2]);
    }
    return this;
  }

  off(events) {
    if (typeof (events) === 'object') {
      for (let i in events) {
        this.el.removeEventListener(i, events[i], false);
      }
    } else if (arguments.length === 2) {
      this.el.removeEventListener(arguments[0], arguments[1], false);
    }
    return this;
  }

  buttonMode(bool) {
    if (bool) {
      this.el.style.cursor = 'pointer';
    } else {
      this.el.style.cursor = 'auto';
    }
    return this;
  }

  material(obj) {
    this.__mat = obj;
    return this;
  }

  visibility(obj) {
    if (obj.visible !== undefined) {
      this.visible = obj.visible;
    }

    if (obj.alpha !== undefined) {
      this.alpha = obj.alpha;
    }

    return this;
  }
}
