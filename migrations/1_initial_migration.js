const MyToken = artifacts.require("Nameless");

module.exports = function (deployer) {
  deployer.deploy(MyToken);
};
