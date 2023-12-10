FROM python:3.12-slim

WORKDIR /code

COPY ./requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . .

EXPOSE 8000

ENTRYPOINT ["bash", "/code/docker-entrypoint.sh"]