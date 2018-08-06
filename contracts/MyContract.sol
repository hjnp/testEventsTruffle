pragma solidity ^0.4.24;

contract MyContract {
    uint public value;
    event ValueSet(uint val);

    function setValue(uint val) public {
        value = val;
        emit ValueSet(value);
    }
    
    function getValue() public view returns (uint) {
        return value;
    }
}