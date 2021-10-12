const lamdas = require("../Lambdas/lambda.js")

exports.get = (req, res) => {
    res.status(200).send(lamdas.myLamda())
}