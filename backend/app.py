# falcon is the framework equivalent to rails
import falcon 

from .cities_controller import CityController

# if was ruby, it would be something like falcon::App.new({ cors_enable: true})
app = application = falcon.App(cors_enable=True) 

# configure the routes
app.add_route('/cities', CityController())
