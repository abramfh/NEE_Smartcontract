const Migrations = artifacts.require("NeebytesDistribuition");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
