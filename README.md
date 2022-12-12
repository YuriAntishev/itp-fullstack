# itp-fullstack
Fullstack app for Student and Subject relations with CRUD operations on backend and Login via Web3 on Frontend

## Technologies in use

Backend: Fastify, Postgresql

Migrations and Seeds: Typeorm

Frontend: React, Redux-toolkit, Antd

## Start this app on the local machine
1. You need to create a container in the docker with the postgresql database using the following command:
    ```typescript
    docker run --name itp-db \
    -e POSTGRES_PASSWORD=secret \
    -p 5432:5432 \
    -d postgres
    ```
2. After that, you need to install all dependencies and fill DB by data:
```bash
# Inside folder /be you need to run command:
npm install

# After the installation is completed, inside folder /be you need to run command to run the server:
npm run dev

# To create tables and fill the database with test data, you need to use the next commands one by one:
npm run migration:run
npm run seeds:run

# Inside folder /fe you need to run command:
yarn install

# After the installation is completed, inside folder /fe you need to run command to run the frontend:
npm start
```
3. After that, everything is ready to check:

on page Home - you can check Students and Subjects

on page Login - you can check Login with Web3.js via MetaMask wallet
