$(document).ready(function() {

  var thermostat = new Thermostat;
  $('#temperature').text(getTemperature());
  $('#city-display').hide();

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
    postTemperature();
    postEnergyUsage();
  };

  function getTemperature() {
    $.get("http://localhost:4567/temperature", function(data) {
      $('#temperature').text(data.temperature);
    })
  };

  function postTemperature() {
    var temperature = thermostat.getCurrentTemperature();
    $.post("http://localhost:4567/savetemperature",
      { temperature: temperature },
    function(){
      console.log('temp posted success', temperature);
    });
  };

  function postEnergyUsage() {
    var energyUsage = thermostat.getEnergyUsage();
    $.post("http://localhost:4567/savetemperature",
      { energyUsage: energyUsage },
    function(){
      console.log('energy posted success', energyUsage);
    });
  };

  function updatePSMStatus() {
    if (thermostat.isPowerSaving) {
      $('#psm-status').text('On').attr('class', 'psm-on');
    } else {
      $('#psm-status').text('Off').attr('class', 'psm-off');
    }
  };

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp)
      $('#city').text(data.name);
    })
  };

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#chosen-city').val();
    displayWeather(city);
    $('#city-display').fadeIn(500);
  })

});
