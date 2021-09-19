
import requests

class CityService:
    cities = [ "Berlin", "Leipzig", "Mountain View" ] # will be 10 cities at the end

    def get_all(self):
      data = []
      for city in CityService.cities:
        response = requests.get(
            f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=33723607922dc4022ad15bf945b658cb")

        data.append(response.json())

      return data
    def create(self, new_city):
      CityService.cities.append(new_city)
