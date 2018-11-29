require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base

  before do
    headers 'Access-Control-Allow-Methods' => ['GET', 'POST']
  end

  get '/temperature' do
    erb :index
  end

  post '/savetemperature' do
    p params
    redirect '/temperature'
  end

  run! if app_file == $0

end
