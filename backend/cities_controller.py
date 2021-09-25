
import json
import falcon
from .cities_service import CityService

class CityController:

    def on_get(self, req, resp):
        service = CityService()

        doc = service.get_all()

        # Create a JSON representation of the resource
        resp.text = json.dumps(doc, ensure_ascii=False)

        # The following line can be omitted because 200 is the default
        # status returned by the framework, but it is included here to
        # illustrate how this may be overridden as needed.
        resp.status = falcon.HTTP_200

    def on_post(self, req, resp):
        service = CityService()

        # https://falcon.readthedocs.io/en/stable/api/request_and_response_wsgi.html#id1
        service.create(req.media['name'])

        resp.status = falcon.HTTP_201
