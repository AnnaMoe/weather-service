
import json
import falcon
import requests

class City:

    def on_get(self, req, resp):
        response = requests.get(
            "https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=33723607922dc4022ad15bf945b658cb")

        city = response.json()

        doc = [ city ]

        # Create a JSON representation of the resource
        resp.text = json.dumps(doc, ensure_ascii=False)

        # The following line can be omitted because 200 is the default
        # status returned by the framework, but it is included here to
        # illustrate how this may be overridden as needed.
        resp.status = falcon.HTTP_200
