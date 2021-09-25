# falcon is the framework equivalent to rails
import falcon 

from .cities_controller import CityController

app = application = falcon.App(cors_enable=True)

# configure the routes
app.add_route('/cities', CityController())
