const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const port = 3015

const sequelize = require('./db.config.js')
sequelize.sync().then(() => console.log('database ready!'))

const productsEndpoint = require('./routes/products')

const app = express()

app.use(cors());
app.use(fileUpload())
app.use(bodyParser.json());
app.use(express.static("public"))

app.use('/products', productsEndpoint)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})