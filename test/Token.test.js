// SPDX-License-Identifier: MIT
const { BN, expectRevert, expectEvent } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const Token = artifacts.require('Token');

contract('Token', function (accounts) {
    const NAME = 'OToken';
    const SYMBOL = 'OTK';
    const DECIMALS = new BN('18');
    const TOTAL_SUPPLY = new BN('21000000000000000000000000');

    let token;

    before(async function () {
        token = await Token.deployed();
    });

    it('1. totalSupply returns the correct total supply.', async function () {
        expect(await token.totalSupply()).to.be.bignumber.equal(TOTAL_SUPPLY);
    });

    it('2. Has correct name.', async function () {
        expect(await token.name()).to.equal(NAME);
    });

    it('3. Has correct symbol.', async function () {
        expect(await token.symbol()).to.equal(SYMBOL);
    });

    it('4. Has correct decimals.', async function () {
        expect(await token.decimals()).to.be.bignumber.equal(DECIMALS);
    });

    it('5. Assigns the initial total supply to the creator.', async function () {
        const creator = accounts[0];
        expect(await token.balanceOf(creator)).to.be.bignumber.equal(TOTAL_SUPPLY);
    });
});
