let Game = artifacts.require("./Game.sol");
let Rogue = artifacts.requrie("./Classes/Rogue.sol");
let Wizard = artifacts.requrie("./Classes/Wizard.sol");
let Warrior = artifacts.requrie("./Classes/Warrior.sol");

module.exports = function (deployer) {
  let _gamel
  deployer.deploy(Game)
  .then((instance) => {
    _game = instance;
    return deployer.deploy(Rogue);
  })
  .then(() => {
    return _game.addClass("Rogue", Rogue.address);
  })
  .then(() => {
  
    return deployer.deploy(Wizard);
  })
  .then(() => {
    return _game.addClass("Wizard", Wizard.address);
  })
  .then(() => {
   
    return deployer.deploy(Warrior);
  })
  .then(() => {
    return _game.addClass("Warrior", Warrior.address);
  })
};
