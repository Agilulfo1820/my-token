const MyToken = artifacts.require("Nameless");
const truffleAssert = require('truffle-assertions');

contract('Test Pausable', (accounts) => {
    const deployAccount = accounts[0];

    let contract = null
    before(async () => {
        contract = await MyToken.deployed()
    })

    it('Users cannot transfer if contract is paused', async () => {
        await contract.pause({ from: deployAccount })
        await contract.mint(accounts[2], 1000, { from: deployAccount })

        let oldBalance = await contract.balanceOf(accounts[3])

        await truffleAssert.reverts(
            contract.transfer(accounts[3], 1000, { from: accounts[2] })
        );

        const newBalance = await contract.balanceOf(accounts[3])
        assert(newBalance.toNumber() === oldBalance.toNumber())

        await contract.unpause({ from: deployAccount })
    })
})