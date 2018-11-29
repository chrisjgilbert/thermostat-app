'use strict';

var DEFAULT_STARTING_TEMP = 20;
var DEFAULT_MIN_TEMP = 10;
var PSM_ON_MAX_TEMP = 25;
var PSM_OFF_MAX_TEMP = 32;

function Thermostat() {
  this.temperature = DEFAULT_STARTING_TEMP;
  this.minTemperature = DEFAULT_MIN_TEMP;
  this.maxTemperature = PSM_ON_MAX_TEMP;
}

Thermostat.prototype.inscreaseTemperature = function() {
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  this.temperature--;
};

Thermostat.prototype.powerSavingOn = function() {
  this.maxTemperature = PSM_ON_MAX_TEMP;
};

Thermostat.prototype.powerSavingOff = function() {
  this.maxTemperature = PSM_OFF_MAX_TEMP;
};
