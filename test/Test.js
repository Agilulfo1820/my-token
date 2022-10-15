const MyToken = artifacts.require("Nameless");
const { assert } = require('chai');
const {ethers} = require('ethers');

contract('Test Main Requeriment', (accounts) => {
    const deployAccount = accounts[0];

    let contract = null
    before(async () => {
        contract = await MyToken.deployed()
    })

    it('Owner has 600k on deploy, then sends money, and then pasuses the contract', async () => {
        let ownerBalance = await contract.balanceOf(deployAccount)
        assert(parseInt(ethers.utils.formatEther(ownerBalance.toString())) === 600000, 'Owner doesn\'t have 600k upon deploy');

        await contract.transfer(accounts[1], 1000, { from: deployAccount })
        await contract.transfer(accounts[2], 1000, { from: deployAccount })
        await contract.transfer(accounts[3], 1000, { from: deployAccount })
        await contract.transfer(accounts[4], 1000, { from: deployAccount })

        await contract.pause({ from: deployAccount })
        await contract.unpause({ from: deployAccount })

        await contract.burnFrom(accounts[1], 1000, { from: deployAccount })
        assert((await contract.balanceOf(accounts[1])).toNumber() == 0, 'Account 1 doesn\'t have 0 tokens after burning');
    })
})