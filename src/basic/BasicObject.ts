/**
 * @author Dominic Ming
 * Basic Object that has all 3d style in it
 * */

import { getPrefix, safeAssignArray, safeAddAssignArray, safeAssignXYZ } from "./Tool";

export default class BasicObject {
  private x = 0;
  private y = 0;
  private z = 0;

  private rotationX = 0;
  private rotationY = 0;
  private rotationZ = 0;

  private scaleX = 1;
  private scaleY = 1;
  private scaleZ = 1;

  private width = 0;
  private height = 0;
  private depth = 0;

  private __sort = ['X', 'Y', 'Z'];

  private originX = '50%';
  private originY = '50%';
  private originZ = '0px';

  private __orgO = {x: '50%', y: '50%', z: '0px'};
  private __orgT = {x: '-50%', y: '-50%', z: '0px'};
  private __orgF = {x: 0, y: 0, z: 0};

  private parent = null;
  private children = [];
  private prefix = getPrefix();

  /**
   * Set position for object
   * @param {number} x
   * @param {number} [y]
   * @param {number} [z]
   * @returns {BasicObject}
   */
  public position(x, y, z) {
    [this.x, this.y, this.z] = safeAssignArray([x, y, z], [this.x, this.y, this.z]);
    return this;
  }

  /**
   * Move object
   * @param {number} dx
   * @param {number} [dy]
   * @param {number} [dz]
   * @returns {BasicObject}
   */
  public move(dx, dy, dz) {
    [this.x, this.y, this.z] = safeAddAssignArray([dx, dy, dz], [this.x, this.y, this.z]);
    return this;
  }

  /**
   * Rotation of object (deg)
   * @param {number} x
   * @param {number} [y]
   * @param {number} [z]
   * @returns {BasicObject}
   */
  public rotation(x, y, z) {
    [this.rotationX, this.rotationY, this.rotationZ] = safeAssignArray([x, y, z],
      [this.rotationX, this.rotationY, this.rotationZ]);
    return this;
  }

  /**
   * Rotate object (deg)
   * @param {number} dx
   * @param {number} [dy]
   * @param {number} [dz]
   * @returns {BasicObject}
   */
  public rotate(dx, dy, dz) {
    [this.rotationX, this.rotationY, this.rotationZ] = safeAddAssignArray([dx, dy, dz],
      [this.rotationX, this.rotationY, this.rotationZ]);
    return this;
  }

  /**
   * Set scale
   * @param {number} x
   * @param {number} [y]
   * @param {number} [z]
   * @returns {BasicObject}
   */
  public scale(x, y, z) {
    [this.scaleX, this.scaleY, this.scaleZ] = safeAssignArray([x, y, z],
      [this.scaleX, this.scaleY, this.scaleZ]);
    return this;
  }

  /**
   * Set size
   * @param {number} width
   * @param {number} [height]
   * @param {number} [depth]
   * @returns {BasicObject}
   */
  public size(width, height, depth) {
    [this.width, this.height, this.depth] = safeAssignXYZ([width, height, depth],
      [this.width, this.height, this.depth]);
    return this;
  }

  /**
   * Set origin
   * @param {number} x
   * @param {number} [y]
   * @param {number} [z]
   * @returns {BasicObject}
   */
  public origin(x, y, z) {
    [this.originX, this.originY, this.originZ] = safeAssignXYZ([x, y, z],
      [this.originX, this.originY, this.originZ]);
    return this;
  }

  /**
   * Set sort of x, y, z
   * @param {"X","Y","Z"} s0
   * @param {"X","Y","Z"} s1
   * @param {"X","Y","Z"} s2
   * @returns {BasicObject}
   */
  public sort(s0, s1, s2) {
    if (arguments.length > 3) console.error('sort arguments is wrong!');
    this.__sort = [s0, s1, s2];
    return this;
  }

  /**
   * Add child to BasicObject
   * @param {BasicObject} view
   * @returns {BasicObject}
   */
  public addChild(view) {
    if (view.parent) view.parent.removeChild(view);
    if (view.__name !== '') {
      if (this[view.__name] !== undefined) console.log(view.__name + ' already exist!');
      this[view.__name] = view;
    }
    this.children.push(view);
    view.parent = this;
    return this;
  }

  /**
   * remove child from BasicObject
   * @param {Sprite} view
   * @returns {BasicObject}
   */
  public removeChild(view) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i] === view) {
        if (view.__name !== '') delete this[view.__name];
        this.children.splice(i, 1);
        view.parent = null;
        return this;
      }
    }
    return this;
  }

  /**
   * remove all child form BasicObject
   * @returns {BasicObject}
   */
  public removeAllChild() {
    for (let i = this.children.length - 1; i >= 0; i--) {
      let view = this.children[i];

      if (view.__name !== '') delete this[view.__name];
      view.parent = null;
    }
    this.children = [];
    return this;
  }

  /**
   * remove now object form its parent
   * @returns {BasicObject}
   */
  public remove() {
    if (this.parent !== null) {
      this.parent.removeChild(this);
    }
    return this;
  }
}
