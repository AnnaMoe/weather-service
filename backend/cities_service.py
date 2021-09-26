
import requests

# fetching the weather-API
# handling data (as a model usually does in rails)
# --> separation from the controller
class CityService:
    cities = [ "Berlin", "Leipzig", "Mountain View", "Hamburg", "Lissabon", "Stockholm", "Rio de Janeiro", "Kopenhagen", "Madrid", "Rinteln" ] # will be 10 cities at the end

    def get_all(self):
      data = []
      for city in CityService.cities:
        response = requests.get(
          # string interpolation with f-prefix
            f"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=33723607922dc4022ad15bf945b658cb")

        data.append(response.json())

      return data

    def create(self, new_city):
      # in rails we don't have to create this method (already created in the background)
      # keep the new city in the variable in-memory
      # it could be persisted in a database, but I am keeping it simple for now
      CityService.cities.append(new_city)
