# inspired on https://github.com/berndverst/falcon-docker
FROM python:alpine

# making docker port available to other servers

EXPOSE 8000

# Install dependencies gunicorn requests & falcon on docker
RUN pip install gunicorn falcon requests

# copy current folder into new backend folder in docker
COPY ./ /backend

CMD ["gunicorn", "-b", "0.0.0.0:8000", "backend.app"]
