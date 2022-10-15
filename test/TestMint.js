const MyToken = artifacts.require("Nameless");
const truffleAssert = require('truffle-assertions');

contract('Test Mint', (accounts) => {
    const deployAccount = accounts[0];

    let contract = null
    before(async () => {
        contract = await MyToken.deployed()
    })

    it('Should mint properly', async () => {
        let receiverAccount = accounts[1];
        await contract.mint(receiverAccount, 1000, { from: deployAccount })
        const balance = await contract.balanceOf(receiverAccount)
        assert(balance.toNumber() === 1000)
    })

    it('Only owner should be able to mint', async () => {
        await truffleAssert.reverts(
            contract.mint(accounts[2], 1000, { from: accounts[1] })
        );

        const balance = await contract.balanceOf(accounts[2])
        assert(balance.toNumber() === 0)
    })

    it('Owner can mint even if contract is paused', async () => {
        await contract.pause({ from: deployAccount })
        await contract.mint(accounts[3], 1000, { from: deployAccount })

        const balance = await contract.balanceOf(accounts[3])
        assert(balance.toNumber() === 1000)

        await contract.unpause({ from: deployAccount })
    })
})