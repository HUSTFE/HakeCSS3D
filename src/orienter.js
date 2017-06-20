/**
 * Created by hust on 2017/6/20.
 */
export default class Orienter {
  constructor(config) {
    let _config = config || {};

    this.onOrient = _config.onOrient || function () {};
    this.onChange = _config.onChange || function () {};

    this._orient = this._orient.bind(this);
    this._change = this._change.bind(this);

    this.lon = 0;
    this.lat = 0;
    this.direction = window.orientation || 0;

    switch (this.direction) {
      case 0:
        this.fix = 0;
        break;
      case 90:
        this.fix = -270;
        break;
      case -90:
        this.fix = -90;
        break;
    }

    if (!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      this.os = (navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux')) ? 'android' : '';
    } else {
      this.os = 'ios';
    }
  }

  init() {
    window.addEventListener('deviceorientation', this._orient, false);
    window.addEventListener('orientationchange', this._change, false);
  }

  destroy() {
    window.removeEventListener('deviceorientation', this._orient, false);
    window.removeEventListener('orientationchange', this._change, false);
  }

  _change(event) {
    this.direction = window.orientation;

    this.onChange(this.direction);
  }

  changeDirectionTo(n) {
    this.direction = n;
  }

  _orient(event) {
    switch (this.os) {
      case 'ios':
        switch (this.direction) {
          case 0:
            this.lon = event.alpha + event.gamma;
            if (event.beta > 0) this.lat = event.beta - 90;
            break;
          case 90:
            if (event.gamma < 0) {
              this.lon = event.alpha - 90;
            } else {
              this.lon = event.alpha - 270;
            }
            if (event.gamma > 0) {
              this.lat = 90 - event.gamma;
            } else {
              this.lat = -90 - event.gamma;
            }
            break;
          case -90:
            if (event.gamma < 0) {
              this.lon = event.alpha - 90;
            } else {
              this.lon = event.alpha - 270;
            }
            if (event.gamma < 0) {
              this.lat = 90 + event.gamma;
            } else {
              this.lat = -90 + event.gamma;
            }
            break;
        }
        break;
      case 'android':
        switch (this.direction) {
          case 0:
            this.lon = event.alpha + event.gamma + 30;
            if (event.gamma > 90) {
              this.lat = 90 - event.beta;
            } else {
              this.lat = event.beta - 90;
            }
            break;
          case 90:
            this.lon = event.alpha - 230;
            if (event.gamma > 0) {
              this.lat = 270 - event.gamma;
            } else {
              this.lat = -90 - event.gamma;
            }
            break;
          case -90:
            this.lon = event.alpha - 180;
            this.lat = -90 + event.gamma;
            break;
        }
        break;
    }

    this.lon += this.fix;
    this.lon %= 360;
    if (this.lon < 0) this.lon += 360;

    this.lon = Math.round(this.lon);
    this.lat = Math.round(this.lat);

    this.onOrient({
      a: Math.round(event.alpha),
      b: Math.round(event.beta),
      g: Math.round(event.gamma),
      lon: this.lon,
      lat: this.lat,
      dir: this.direction
    });
  }
}
