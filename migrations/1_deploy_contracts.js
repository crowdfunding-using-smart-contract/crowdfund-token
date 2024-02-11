const Token = artifacts.require('Token');

module.exports = function (deployer) {
    deployer.deploy(Token, 'OToken', 'OTK', 21000000);
};