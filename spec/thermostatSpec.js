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


  });


});
