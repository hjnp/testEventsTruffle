var MyContract = artifacts.require("./MyContract.sol");

contract('MyContract', function([ owner, holder1, holder2 ]) {


  let tokenInstance;
  let erc20addr;

  it('initializes the contract ', async function() {
    tokenInstance = await MyContract.deployed();
  });

 
  it('Event test', async function() {
    const _amount = 120;

    const { receipt } = await tokenInstance.setValue(_amount, { from: owner });

    console.log('​receipt ||| MyContract ', receipt);
    console.log('receipt.logs ||| MyContract ||| ', receipt.logs);

   });

  
});
