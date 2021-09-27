# inspired on https://github.com/berndverst/falcon-docker
FROM python:alpine

EXPOSE 8000

# Install gunicorn requests & falcon
RUN pip install gunicorn falcon requests

# Add demo app
COPY ./ /backend

CMD ["gunicorn", "-b", "0.0.0.0:8000", "backend.app"]
