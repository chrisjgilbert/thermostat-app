'use strict';

var DEFAULT_STARTING_TEMP = 20;
var DEFAULT_MIN_TEMP = 10;

function Thermostat() {
  this.temperature = DEFAULT_STARTING_TEMP;
  this.minTemperature = DEFAULT_MIN_TEMP;
}

Thermostat.prototype.inscreaseTemperature = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature--;
};
