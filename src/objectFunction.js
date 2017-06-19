/**
 * Created by Doming on 2017/6/9.
 */
export default class ObjectFunctions {

  /**
   * @param obj Object
   * @return keys Array
   * @description To get all keys of a object into an array*/

  static keys(obj) {
    let keys = [];

    for (let key in obj) {
      keys.push(key);
    }
    return keys;
  }

  /**
   * @param obj Object
   * @param exObj Extend Object
   * @return obj Object
   * @description Extend object with all arguments object, the object key will be rewrite by object after*/

  static extend(obj,...exObj) {
    let length = exObj.length;

    if (length < 2 || obj == null) return obj;
    for (let i = 1; i < length; i++) {
      let [source, ks, sl] = [exObj[i], PrivateFunctions.keys(source), ks.length];

      for (let i = 0; i < sl; i++) {
        let key = ks[i];

        obj[key] = source[key];
      }
    }
    return obj;
  }

  static prefixCheck() {
    let _d = document.createElement('DIV'),
      _prefix = ['', 'Webkit', 'Moz', 'Ms', 'O'];

    for (let i in _prefix) {
      if (_prefix[i] + 'Transform' in _d.style) {
        return _prefix[i];
      }
    }

    throw 'Your browser might not support CSS3 properly.'
  }
}
