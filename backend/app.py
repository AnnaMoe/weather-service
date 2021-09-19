import falcon

from .cities import City

app = application = falcon.App()

cities = City()
app.add_route('/cities', cities)
