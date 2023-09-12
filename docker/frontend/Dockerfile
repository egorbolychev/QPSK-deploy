FROM node:16-alpine
WORKDIR /app

COPY ./frontend/QPSK-frontend .
RUN npm install --force
EXPOSE 3000

CMD ["npm", "run", "dev"]