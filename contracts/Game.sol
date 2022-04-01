pragma solidity ^0.8.0;

import "./Character.sol";


contract Game {

    address private _owner;

    mapping(address => Character) private _characters;
    mapping(string => Class)private _classes;

    constructor() public {
        _owner = msg.sender;
    }

    modifier isOwner {
        require(_owner == msg.sender, "Sender is not the contract owner");
        _;
    }

    function createCharacter(string memory name, string memory class) public {
        _characters[msg.sender] = new Character(name, _classes[class]);
    }

    function getCharacter () public view returns (Character) {
        return _characters[msg.sender];
    }

    function addClass(string memory key, Class class) public isOwner{
        _classes[key] = class;
    }

    function removeClass(string memory key) public isOwner {
        delete _classes[key];
    }
}
