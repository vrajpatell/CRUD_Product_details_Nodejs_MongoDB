const Product = require("../models/product.model.js");

exports.create = (req, res) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Product details missing",
    });
  }

  const product = new Product({
    name: req.body.name,
    title: req.body.title,
    color: req.body.color,
    price: req.body.price,
    description: req.body.description,
  });

  product
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error occured",
      });
    });
};

exports.findAll = (req, res) => {
  Product.find()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error occured",
      });
    });
};

exports.findOne = (res, req) => {
  Product.findById(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "Product Id not found" + req.params.productId,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      if (err.kind == "ObjectId") {
        return res.status(404).send({
          message: "Product not found with that Id" + req.param.productId,
        });
      }
      return res.status(500).send({
        message: "error while retrieving with id" + req.params.productId,
      });
    });
};

exports.update = (res, req) => {
  if (!req.body.content) {
    return res.status(400).send({
      message: "Product content can not be empty",
    });
  }

  Product.findByIdAndUpdate(
    req.params.productId,
    {
      name: req.body.name,
      title: req.body.title,
      color: req.body.color,
      price: req.body.price,
      description: req.body.description,
    },
    { new: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "Product Not found with this Id" + req.params.productId,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      if (err.kind == "ObjectId") {
        return res.status(404).send({
          message: "Product not found with Id" + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Error updateing product with Id" + req.params.productId,
      });
    });
};

exports.delete = (req, res) => {
  Product.findByIdAndRemove(req.params.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "Product Not found with Id" + req.params.productId,
        });
      }
      res.send({ message: "Product Deleted" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Product not found with id " + req.params.productId,
        });
      }
      return res.status(500).send({
        message: "Could not delete product with id" + req.params.productId,
      });
    });
};
