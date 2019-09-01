const express = require('express');
const app = express();
const customerRoutes = express.Router();

let Customer = require('../models/Customer');

customerRoutes.route('/add').post(function (req, res) {
    let customer = new Customer(req.body);
    console.log(customer)
    customer.save()
        .then(status => {
            res.status(200).json({
                'result': 'feedback recorded successfully'
            });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

customerRoutes.route('/').get(function (req, res) {
    Customer.find(function (err, customers) {
        if (err) {
            console.log(err);
        } else {
            res.json(customers);
        }
    });
});

module.exports = customerRoutes;