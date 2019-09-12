/**
 * @author Dominic Ming
 * Basic tool function are in here, for global usage
 * */

export function format2Int(n: number) {
  return Math.round(n);
}

export function format2Float(n: number) {
  return Math.round(n * 100) / 100;
}

export function formatUpper1(str: string) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

export function checkAvailability() {
  const styleSet = new Set(Object.keys(document.createElement('DIV').style));

  // check origin property
  if (styleSet.has('transform')) return '';

  // check if other core properties present
  const styleList = ['webkit', 'Webkit', 'Moz', 'Ms', 'O'].filter(prefix => styleSet.has(`${prefix}Transform`));

  if (styleList.length === 0) {
    throw Error('Your browser might not support CSS3 3D properly')
  }

  return styleList[0]
}

export function safeAssignArray(origin, target) {
  return origin.map((o, i) => !target[i] ? o : target[i])
}

export function safeAddAssignArray(origin, target) {
  return origin.map((o, i) => !target[i] ? o : target[i] + o)
}

export function safeAssignXYZ([ox, oy, oz], target) {
  const [tx = ox, ty = oy, tz = oz] = target;

  return [tx, ty, tz]
}

const prefix = checkAvailability();

export function getPrefix() {
  return prefix;
}
