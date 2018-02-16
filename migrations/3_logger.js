let Log = artifacts.require('./Log.sol');

module.exports = function (deployer) {
  deployer.deploy(Log);
};
