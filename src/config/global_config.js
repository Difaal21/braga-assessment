require('dotenv').config();
const confidence = require('confidence');

const config = {
    port: process.env.PORT,
    basicAuthApi: [
        {
            username: process.env.BASIC_AUTH_USERNAME,
            password: process.env.BASIC_AUTH_PASSWORD
        }
    ],
    postgre: {
        database: process.env.POSTGRE_DATABASE,
        username: process.env.POSTGRE_USER,
        password: process.env.POSTGRE_PASSWORD,
        host: process.env.POSTGRE_HOST
    },
    jwtKey: process.env.JWT_KEY,
};

const store = new confidence.Store(config);

exports.get = key => store.get(key);
