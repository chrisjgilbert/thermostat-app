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

    content_type :json
    { temperature: temperature}.to_json
  end

  post '/temperature' do
    session[:temperature] = params[:temperature]
    redirect '/'
  end

  run! if app_file == $0

end
