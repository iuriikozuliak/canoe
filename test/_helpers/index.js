require('ignore-styles');
import chai          from 'chai';
import appModulePath from 'app-module-path';
import sinon         from 'sinon';
import sinonChai     from 'sinon-chai';

appModulePath.addPath(__dirname + '/../../server');
chai.config.includeStack = true;
chai.use(sinonChai);
chai.should();

global.expect         = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion      = chai.Assertion;
global.assert         = chai.assert;
global.sinon          = sinon;