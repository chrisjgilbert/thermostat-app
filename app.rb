require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base
  enable :sessions

  before do
    headers 'Access-Control-Allow-Methods' => '*'
  end

  get '/' do
    erb :indexs
  end

  get '/temperature' do
    temperature = session[:temperature] || 20.to_s
    # session = session[:energyUsage]

    content_type :json
    { temperature: temperature }.to_json
  end

  post '/savetemperature' do
    session[:temperature] = params[:temperature]
    # session[:energy] = params[:energy]
    redirect '/'
  end

  run! if app_file == $0

end
