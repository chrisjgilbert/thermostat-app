'use strict';

var DEFAULT_STARTING_TEMP = 20;

function Thermostat() {
  this.temperature = DEFAULT_STARTING_TEMP;
}

Thermostat.prototype.inscreaseTemperature = function() {
  this.temperature++;
};
