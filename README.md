# weather-service

## Backend

### Decisions

1.  Use gunicorn as WSGI Server. Why? Because it was in the example in falcon documentation, ref: https://falcon.readthedocs.io/en/stable/user/quickstart.html#learning-by-example
2. Use Insomnia app to test rest endpoints.
3. Use a CityService class to split business logic from controller logic (integration with weather api and cities in-memory database).
4. Use an array as in-memory database. Why? For keeping it simple, it can be replaced by any kind of database later on.

### Ideas for improvement
CityController
1. DRY principle, avoid duplicated initialization of CityService, it could be moved into a private variable in the Service class.

CityService
1. Use a database for saving the list of cities instead of array

### running local environment

`gunicorn --reload backend.app`
### running with docker
```
docker build -t myfalcon .

docker run -it -p 8000:8000 myfalcon 
```
## Frontend

### running local environment
```
cd frontend
ng serve --open
```

### running with docker
 
```
docker build -t av-app-multistage-image .

docker run -it -p 8888:80 av-app-multistage-image
```

http://localhost:8888/