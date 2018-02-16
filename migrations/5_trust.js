const Log = artifacts.require('Log');
const Trust = artifacts.require('./TrustFund');

module.exports = function (deployer) {
  deployer.deploy(Trust, 100000000000000000, Log.address);
};
