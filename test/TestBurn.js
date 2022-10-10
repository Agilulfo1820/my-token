const MyToken = artifacts.require("MyToken");
const truffleAssert = require('truffle-assertions');

contract('Test Burn', (accounts) => {
    const deployAccount = accounts[0];

    let contract = null
    before(async () => {
        contract = await MyToken.deployed()
    })

    it('Users cannot call burnFrom function', async () => {
        await contract.transfer(accounts[1], 1000, { from: deployAccount })

        await truffleAssert.reverts(
            contract.burnFrom(accounts[1], 1000, { from: accounts[2] })
        );
    })
})