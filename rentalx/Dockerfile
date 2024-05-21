FROM node

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

COPY wait-for-it.sh /usr/app/wait-for-it.sh
RUN chmod +x /usr/app/wait-for-it.sh

CMD ["/bin/bash", "/usr/app/wait-for-it.sh", "database_rentalx:5432", "--", "npm", "run", "dev"]
