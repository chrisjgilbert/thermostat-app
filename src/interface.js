$(document).ready(function() {

  var thermostat = new Thermostat;
  $('#temperature').text(updateTemperature());

  $('#increase-temp').on('click', function() {
    thermostat.inscreaseTemperature();
    updateTemperature();
  });

  $('#decrease-temp').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  });

  $('#reset-temp').on('click', function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#psm-on').on('click', function() {
    thermostat.powerSavingOn();
    $('#psm-status').text('On');
    updateTemperature();
  });

  $('#psm-off').on('click', function() {
    thermostat.powerSavingOff();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.getEnergyUsage());
    updatePSMStatus();
  };

  function updatePSMStatus() {
    if (thermostat.isPowerSaving) {
      $('#psm-status').text('On');
    } else {
      $('#psm-status').text('Off');
    }
  };

});
