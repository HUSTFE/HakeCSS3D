/**
 * Created by Doming on 2017/6/19.
 */
import TObject from 'TObject';

export default class Camera extends TObject {
  constructor(params) {
    super(params);
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
