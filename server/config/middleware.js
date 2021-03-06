const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

module.exports = (app, express) => {
    app.use(morgan('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
// serve up public folder
    app.use(express.static(path.join(__dirname, '../../public')))
}