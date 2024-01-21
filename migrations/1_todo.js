var todo = artifacts.require("TodoList");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(todo);
};
