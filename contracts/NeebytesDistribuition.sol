// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.22 <0.9.0;

contract NeebytesDistribuition {

    address private neeWallet = payable(0x251D1A4b4d59E386a50f913c50F4BE6F49ac732d);
    address private poolWallet = payable(0xe96Ae680Ef223687e837d10eA643199C333ee4cD);

    uint public originalValue;
    uint256 constant WEI_CAP = 2**256 - 1;
 

    function distribute() payable public {
        uint value = msg.value;

        require(value <= address(this).balance, "Insufficient balance.....");
        require(value <= WEI_CAP, "Value too big");

        require(msg.sender == 0x43B15f703e872DA66256c8C58B69938Deb199425, "Permission denied");

        originalValue = (value * 100) / (100 + 10);
 
        payable(neeWallet).transfer(value - originalValue);

        payable(poolWallet).transfer(originalValue);
 
    }

   
}