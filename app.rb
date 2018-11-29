require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base

  get '/temperature' do
    headers 'Access-Control-Allow-Origin' => '*'
    erb :index
  end

  post '/savetemperature' do
    p params
    redirect '/temperature'
  end

  get '/time' do
    { time: Time.now.to_s, city: 'London'}.to_json
  end

  post '/time' do
    p params
  end

  run! if app_file == $0

end
