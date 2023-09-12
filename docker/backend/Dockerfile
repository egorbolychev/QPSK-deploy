FROM python:3.9-alpine3.16

COPY ./backend/QPSK-backend/requirments.txt /temp/requirments.txt
COPY ./backend/QPSK-backend/Qpsk /app

WORKDIR /app

RUN apk add postgresql-client build-base postgresql-dev
RUN pip install --upgrade pip
RUN pip install -r /temp/requirments.txt