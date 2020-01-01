const express = require('express');
const router = express.Router();

const service = require('../services/contact');
const contactAPI = '/contact';

router.get('/', (req, res) => res.send('Hello World!'));

router.get(contactAPI, (req, res) => service.getAll(req, res));
router.get(`${contactAPI}/:id`, (req, res) => service.getById(req, res));
router.post(contactAPI, (req, res) => service.post(req, res));
router.put(`${contactAPI}/:id`, (req, res) => service.put(req, res));
router.delete(`${contactAPI}/:id`, (req, res) => service.remove(req, res));

module.exports = router;