require 'sinatra/base'
require 'json'

class ThermostatApp < Sinatra::Base
  enable :sessions

  before do
    headers 'Access-Control-Allow-Methods' => '*'
  end

  get '/' do
    erb :index
  end

  get '/temperature' do
    temperature = session[:temperature] || 20.to_s
    psm = session[:psm] || true

    content_type :json
    { temperature: temperature, psm: psm }.to_json
  end

  post '/savetemperature' do
    session[:temperature] = params[:temperature]
    session[:psm] = params[:psm]
    redirect '/'
  end

  run! if app_file == $0

end
