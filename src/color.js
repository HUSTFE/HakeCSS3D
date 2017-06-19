/**
 * Created by Doming on 2017/6/9.
 */
export default class Color {
  static getRandomColor() {
    return '#' + ('000000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
  }

  static RGBToHex(r, g, b) {
    return ((r << 16) | (g << 8) | b).toString(16);
  }

  static hexToRGB(s) {
    let _n = Math.floor('0x' + s);

    return [(_n >> 16 & 255), (_n >> 8 & 255), (_n & 255)];
  }
}
