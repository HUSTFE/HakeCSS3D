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
    return '';
  }

  static valid(l, back) {
    return l.map((e, i) => !e ? back[i] : e);
  }

  static validPlus(l, back) {
    return l.map((e, i) => !e ? back[i] : e + back[i]);
  }

  static validMatch(l, back) {
    let [x, y, z] = l;

    if (z) {
      return [x, y, z];
    } else if (y) {
      return [x, y, back[2]];
    } else if (x) {
      return [x, x, x];
    }
    return back;
  }
}
