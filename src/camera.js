/**
 * Created by Doming on 2017/6/19.
 */
import TObject from 'TObject';

export class Camera extends TObject {
  initialize(params) {
    super.initialize.apply(this, [params]);
    this.fov = 75;
  }

  update() {
    this.updateT();
    return this;
  }

  updateS() {
    return this;
  }

  updateM() {
    return this;
  }

  updateT() {
    if (this.stage) this.stage.updateT();
    return this;
  }

  updateV() {
    return this;
  }
}
