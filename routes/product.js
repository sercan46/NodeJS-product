var express = require('express');
var router = express.Router();
var product = require('../models/productModel');

/* Ürünlerin Listelendiği Yer (GET) */
router.get('/', function (req, res) {
    product.find().then(response => {
        res.json(response)
    }).catch((err) => {
        res.status(500).json(err)
    })
})

/* Ürünlerin Eklendiği Yer (POST) */
router.post('/', function (req, res) {
    new product({
        name: req.body.name,
        price: req.body.price,
        count: req.body.count,
        description: req.body.description
    }).save().then(() => {
        res.json('Kaydetme Başarılı')
    }).catch((err) => {
        res.status(500).json('Kaydetme Sırasında Hata Oluştu');
    })
})

/* Ürünlerin Güncellendiği Yer (PUT) */
router.put("/:id", function (req, res, next) {

    var id = req.params.id;

    product.findByIdAndUpdate({ "_id": id }, req.body).then(() => {
        res.json("Güncelleme İşlemi Başarılı.");
    }).catch((err) => {
        res.status(500).json("Güncelleme İşleminde Hata Oluştu.");
    });

});

/* Ürünlerin Silindiği Yer (DELETE) */
router.delete("/:id", function (req, res, next) {
    var id = req.params.id;
    product.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });
});
module.exports = router