/**
 * Created by Doming on 2017/6/19.
 */
import Sprite from 'sprite'

export default class Stage extends Sprite{
  initialize(params) {
    C3D.Stage.__super__.initialize.apply(this, [params]);

    if (!(params && params.el)) {
      this.el.style.top = '0px';
      this.el.style.left = '0px';
      this.el.style.width = '0px';
      this.el.style.height = '0px';
    }
    this.el.style[prefix + 'Perspective'] = '800px';
    this.el.style[prefix + 'TransformStyle'] = 'flat';
    this.el.style[prefix + 'Transform'] = '';
    this.el.style.overflow = 'hidden';

    this.__rfix = new C3D.Sprite();
    this.el.appendChild(this.__rfix.el);

    this.__pfix = new C3D.Sprite();
    this.__rfix.el.appendChild(this.__pfix.el);

    this.setCamera(new C3D.Camera());
  }

  updateS() {
    this.el.style.width = fixed0(this.width) + 'px';
    this.el.style.height = fixed0(this.height) + 'px';
    return this;
  }
  updateT() {
    this.fov = fixed0(0.5 / Math.tan((this.camera.fov * 0.5) / 180 * Math.PI) * this.height);
    this.el.style[prefix + 'Perspective'] = this.fov + 'px';
    this.__rfix.position(fixed0(this.width / 2), fixed0(this.height / 2), this.fov).rotation(-this.camera.rotationX, -this.camera.rotationY, -this.camera.rotationZ).updateT();
    this.__pfix.position(-this.camera.x, -this.camera.y, -this.camera.z).updateT();
    return this;
  }

  addChild(view) {
    this.__pfix.addChild(view);
    return this;
  }
  removeChild(view) {
    this.__pfix.removeChild(view);
    return this;
  }
  setCamera(cam) {
    if (this.camera) {
      this.camera.stage = null;
    }
    this.camera = cam;
    this.camera.stage = this;
    return this;
  }
}