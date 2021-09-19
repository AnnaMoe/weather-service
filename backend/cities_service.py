
import requests

class CityService:

    def get_all(self):
        response = requests.get(
            "https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=33723607922dc4022ad15bf945b658cb")

        city = response.json()

        return [city]