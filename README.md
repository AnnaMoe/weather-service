# weather-service

## Backend

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