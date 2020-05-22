const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const morgan = require('morgan')

const config = require('./application/Config/general.js')
const routes = require('./application/Routes/Routes.js')


class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.connect()
        this.database()
    }
    middlewares() {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.use(morgan('dev'))
        routes(this.express)
    }
    connect() {
        this.express.listen(config.PORT, () => {
            console.log(`Server in to port ${config.PORT}...`)
        });
    }

    database() {
        mongoose.connect(config.CONNECT, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            })
            .then(() => console.log('Sucessfully connected to the database.'))
            .catch(error => {
                console.log('Error at connect to database.', error)
                process.exit()
            })
    }
}
module.exports = new App().express