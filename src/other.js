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

  static firstUpper(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }

  static prefixCheck() {
    let _d = document.createElement('DIV'),
      _prefix = ['', 'Webkit', 'Moz', 'Ms', 'O'];

    for (let i in _prefix) {
      if (_prefix[i] + 'Transform' in _d.style) {
        return _prefix[i];
      }
    }

    console.error('Your browser might not support CSS3 properly.');
  }
}
