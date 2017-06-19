/**
 * Created by Doming on 2017/6/19.
 */
import Box from 'box';
import Other from 'other';

export default class Skybox extends Box {

  updateS() {
    let _w = Other.fixed0(this.width);
    let _h = Other.fixed0(this.height);
    let _d = Other.fixed0(this.depth);

    this.__orgF.x = this.width / 2;
    this.__orgF.y = this.height / 2;
    this.__orgF.z = this.depth / 2;

    this.front.size(_w, _h, 0).position(0, 0, -_d / 2).rotation(0, 0, 0).updateS().updateT();
    this.back.size(_w, _h, 0).position(0, 0, _d / 2).rotation(0, 180, 0).updateS().updateT();
    this.left.size(_d, _h, 0).position(-_w / 2, 0, 0).rotation(0, 90, 0).updateS().updateT();
    this.right.size(_d, _h, 0).position(_w / 2, 0, 0).rotation(0, -90, 0).updateS().updateT();
    this.up.size(_w, _d, 0).position(0, -_h / 2, 0).rotation(-90, 0, 0).updateS().updateT();
    this.down.size(_w, _d, 0).position(0, _h / 2, 0).rotation(90, 0, 0).updateS().updateT();

    return this;
  }
}
