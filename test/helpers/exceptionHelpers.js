const PREFIX = "Returned error: VM Exception while processing transaction: ";

async function tryCatch(promise, message) {
    try {
        console.log('awaiting promise');
        await promise;
        throw null;
    }
    catch (error) {
        console.log('error', error);
        assert(error, "Expected an error but did not get one");
        console.log(error.message);
        assert(error.message.startsWith(PREFIX + message), "Expected an error starting with '" + PREFIX + message + "' but got '" + error.message + "' instead");
    }
};

module.exports = {
    catchRevert            : async (promise) => {
         return await tryCatch(promise, "revert");
        },
    catchOutOfGas          : async function(promise) {await tryCatch(promise, "out of gas"         );},
    catchInvalidJump       : async function(promise) {await tryCatch(promise, "invalid JUMP"       );},
    catchInvalidOpcode     : async function(promise) {await tryCatch(promise, "invalid opcode"     );},
    catchStackOverflow     : async function(promise) {await tryCatch(promise, "stack overflow"     );},
    catchStackUnderflow    : async function(promise) {await tryCatch(promise, "stack underflow"    );},
    catchStaticStateChange : async function(promise) {await tryCatch(promise, "static state change");},
};