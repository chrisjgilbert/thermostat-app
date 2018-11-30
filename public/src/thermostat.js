'use strict';

var DEFAULT_STARTING_TEMP = 20;
var DEFAULT_MIN_TEMP = 10;
var PSM_ON_MAX_TEMP = 25;
var PSM_OFF_MAX_TEMP = 32;
var LOW_USAGE_LIMIT = 18;
var MED_USAGE_LIMIT = 25;

function Thermostat() {
  this.temperature = DEFAULT_STARTING_TEMP;
  this.minTemperature = DEFAULT_MIN_TEMP;
  this.maxTemperature = PSM_ON_MAX_TEMP;
  this._isPowerSaving = true;
}

Thermostat.prototype.isPowerSaving = function() {
  return this._isPowerSaving;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.setCurrentTemperature = function(temperature) {
  this.temperature = temperature;
};

Thermostat.prototype.getCurrentMaxTemperature = function() {
  return this.maxTemperature;
};

Thermostat.prototype.getCurrentMinTemperature = function() {
  return this.minTemperature;
};

Thermostat.prototype.inscreaseTemperature = function() {
  if (this.temperature < this.maxTemperature) {
    this.temperature++;
  }
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > this.minTemperature) {
    this.temperature--;
  }
};

Thermostat.prototype.powerSavingOn = function() {
  if (this.temperature > PSM_ON_MAX_TEMP) {
    this.temperature = PSM_ON_MAX_TEMP;
  }
  this.maxTemperature = PSM_ON_MAX_TEMP;
  this._isPowerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.maxTemperature = PSM_OFF_MAX_TEMP;
  this._isPowerSaving = false;
};

Thermostat.prototype.resetTemperature = function () {
  this.temperature = DEFAULT_STARTING_TEMP;
};

Thermostat.prototype.getEnergyUsage = function() {
  if (this.temperature < LOW_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this.temperature < MED_USAGE_LIMIT) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
