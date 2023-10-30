const Products = require('../models/products')
const path = require('path')

const getProducts = async (req, res) => {
    try {
        const response = await Products.findAll({
            attributes: ['id', 'uuid', 'image', 'url', 'jenis', 'name', 'desc', 'price', 'stock'],
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const saveProduct = (req, res) => {
    if (!req.files || !req.files.file)
        return res.status(400).json({ msg: "No File uploaded" })
    const file = req.files.file
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`
    const allowedType = ['.png', '.jpg', '.jpeg']

    if (!allowedType.includes(ext.toLowerCase()))
        return res.status(422).json({ msg: "invalid images" })
    if (fileSize > 5000000)
        return res.status(422).json({ msg: "image must be less then 5 MB" })

    const { jenis, name, desc, price, stock } = req.body
    file.mv(`./public/images/${fileName}`, async (err) => {
        if (err)
            return res.status(500).json({ msg: err.message })
        try {
            await Products.create({ image: fileName, url: url, jenis: jenis, name: name, desc: desc, price: price, stock: stock })
            res.status(201).json({ msg: "Product Create Succesfully" })
        } catch (error) {
            console.log(error.message)
        }
    })

}

const getJenis = async (req, res) => {
    try {
        const jenis = req.query.jenis; // Ambil nilai 'jenis' dari parameter query string pada URL (misalnya '/products?jenis=Drink')

        // Panggil data dari kolom 'Jenis' dengan menggunakan model 'Products'
        const product = await Products.findAll({
            where: { jenis: jenis }
        });

        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Produk tidak ditemukan' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = { getProducts, saveProduct, getJenis }