const MyToken = artifacts.require("Nameless");

contract('Test Deploy', (accounts) => {
    const deployAccount = accounts[0];

    let contract = null
    before(async () => {
        contract = await MyToken.deployed()
    })

    it('Should deploy smart contract properly', async () => {
        assert(contract.address != '')
    })

    it('Should set ownership correctly to deployer account', async () => {
        const owner = await contract.owner()
        assert(owner === deployAccount)
    })
})