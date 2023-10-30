const express = require('express')
const { getProducts, saveProduct, getJenis } = require('../controllers/products')

const router = express.Router()

router.get('/p', getProducts)

router.post('/', saveProduct)

router.get('/', getJenis)

module.exports = router