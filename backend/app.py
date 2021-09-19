import falcon

from .cities_controller import CityController

app = application = falcon.App()

cities = CityController()
app.add_route('/cities', cities)
