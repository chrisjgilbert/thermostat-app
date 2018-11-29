'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe('the temperature', function() {

    it('has a default starting temperature of 20', function() {
      expect(thermostat.temperature).toEqual(DEFAULT_STARTING_TEMP);
    });

    it('can be increased', function() {
      thermostat.inscreaseTemperature();
      expect(thermostat.temperature).toEqual(DEFAULT_STARTING_TEMP + 1);
    });

    it('can be decreased', function() {
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(DEFAULT_STARTING_TEMP + -1);
    });

    it('has a minimum', function() {
      expect(thermostat.minTemperature).toEqual(DEFAULT_MIN_TEMP);
    });

    it('has a maximum set by the power saving mode being on by default ', function() {
      expect(thermostat.maxTemperature).toEqual(PSM_ON_MAX_TEMP);
    });

  });

  describe('power saving mode', function() {

    it('sets the max temp to 25 when turned on', function() {
      thermostat.powerSavingOn();
      expect(thermostat.maxTemperature).toEqual(PSM_ON_MAX_TEMP);
    });

    it('sets the max temp to 32 when turned off', function() {
      thermostat.powerSavingOff();
      expect(thermostat.maxTemperature).toEqual(PSM_OFF_MAX_TEMP);
    });

  });


});
