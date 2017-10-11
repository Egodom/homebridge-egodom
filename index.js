var Service, Characteristic;

module.exports = function(homebridge)
{

  console.log("homebridge Egodom API version: " + homebridge.version);
  Accessory = homebridge.platformAccessory;
  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-egodom", "Egodom", EgodomAccessory);

}

function EgodomAccessory(log, config )
{
  log("EgodomAccessory");
  log ("name:%s",config.name);
  log ("type:%s",config.type);

  var platform = this;
  this.log = log;
  this.config = config;

  
}

EgodomAccessory.prototype.getPowerOn = function(callback) 
{
  log("EgodomAccessory.prototype.getPowerOn");
  callback(null, powerOn);
}

EgodomAccessory.prototype.setPowerOn = function(powerOn, callback) 
{
  log("EgodomAccessory.prototype.setPowerOn");
  callback(null);
}

EgodomAccessory.prototype.getServices = function() 
{
    var EgodomService = new Service.Lightbulb(this.name);

    EgodomService
      .getCharacteristic(Characteristic.On)
      .on('get', this.getPowerOn.bind(this))
      .on('set', this.setPowerOn.bind(this));

    return [EgodomService];
}



