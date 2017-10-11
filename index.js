var Service, Characteristic, UUIDGen;

module.exports = function(homebridge)
{

  console.log("homebridge Egodom API version: " + homebridge.version);

  Accessory = homebridge.platformAccessory;

  Service = homebridge.hap.Service;

  Characteristic = homebridge.hap.Characteristic;

  UUIDGen = homebridge.hap.uuid;

  homebridge.registerAccessory("homebridge-egodom", "Egodom", EgodomAccessory, true);

}

function EgodomAccessory(log, config, api)
{
  log("EgodomAccessory");
  log ("name:%s",config.name);
  log ("type:%s",config.type);

  var platform = this;
  this.log = log;
  this.config = config;

  //this.service = config["service"] || "Switch";
  
}

EgodomAccessory.prototype.getServices = function()
{
  return [this.Service];
}




