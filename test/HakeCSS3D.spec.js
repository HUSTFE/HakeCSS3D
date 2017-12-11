import chai from 'chai';
import HakeCSS3D from '../lib/HakeCSS3D.min.js';

chai.expect();

const expect = chai.expect;

var lib;

describe('Given an instance of my library', function () {
  before(function () {
    lib = new HakeCSS3D();
  });
  describe('when I need the version', function () {
    it('should return the version', () => {
      expect(lib.__version).to.be.equal('0.1.0');
    });
  });
});