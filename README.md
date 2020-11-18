# EasyKash

# to install dependencies for backend

`cd EasyKashBackEnd` and run `npm install`

# database configurations

make new database
and inside file database.js inside src/db directory type username of database and password
and inside config.json inside src/confige type username of database and password

# run migrations

`cd src` run `npx sequelize-cli init` then `npx sequelize-cli db:migrate`

# run seeds

`npx sequelize-cli db:seed:all`

# run server

inside EasyKashBackEnd directory and run `npm run dev`

============================================================================

# setup frontend application

`cd EasyKashBackEnd` and run `npm install` then `ng serve -o` to serve the server
