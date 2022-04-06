pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC1155/ERC1155.sol";

contract NFTContract is ERC 1155 {

    uint256 public constant ARTWORK = 0;

    uint256 public constant SAILOR = 1;

    constructor() ERC1155("") {
        _mint(msg.sender, ARTWORK, 1, "");
        _mint(msg.sender, SAILOR, 2, "");
    }

    function mint( address to,
        uint256 id,
        uint256 amount,
       ) public {
           require()
        
    }
}
