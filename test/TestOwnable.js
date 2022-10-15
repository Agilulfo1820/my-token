const MyToken = artifacts.require("Nameless");
const truffleAssert = require('truffle-assertions');

contract('Test that ownership works properly', (accounts) => {
    const deployAccount = accounts[0];

    let contract = null
    before(async () => {
        contract = await MyToken.deployed()
    })

    it('Should change owner correctly', async () => {
        const newOwner = accounts[1]
        await contract.transferOwnership(newOwner, { from: deployAccount })
        const owner = await contract.owner()
        assert(owner === newOwner)
    })

    it('Only owner should be able to change ownership', async () => {
        const newOwner = accounts[2]
        await truffleAssert.reverts(
            contract.transferOwnership(newOwner, { from: deployAccount })
        );
    })
})