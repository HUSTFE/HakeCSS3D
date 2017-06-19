/**
 * Created by Doming on 2017/6/9.
 */
export default class other {
  static fixed0(n) {
    return Math.round(n);
  }

  static fixed2(n) {
    return Math.round(n * 100) / 100;
  }

  static firstUpper(str){
    return str[0].toUpperCase() + str.slice(1, str.length);
  }
}