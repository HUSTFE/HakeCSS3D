/**
 * Created by Doming on 2017/6/9.
 */
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
    this.x = !x ? x + this.x : this.x;
    this.y = !y ? y + this.y : this.y;
    this.z = !z ? z + this.z : this.z;
    return this;
  }
}