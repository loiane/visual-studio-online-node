const Contact = require('../models/contact');
require('./mongo').connect();

async function getAll(req, res) {
    try {
        var records = await Contact.find().exec();
        res.send(records);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function getById(req, res) {
    try {
        var record = await Contact.findById(req.params.id).exec();
        res.send(record);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function post(req, res) {
    try {
        var record = new Contact(req.body);
        var record = await record.save();
        res.status(200).json(record);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function put(req, res) {
    try {
        var record = await Contact.findById(req.params.id).exec();
        record.set(req.body);
        var record = await record.save();
        res.send(record);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function remove(req, res) {
    try {
        var record = await Contact.deleteOne({ _id: req.params.id }).exec();
        res.send(record);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getAll,
    getById,
    post,
    put,
    remove
};