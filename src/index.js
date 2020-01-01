const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.port || '3000';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/contact');

app.use('/api', routes);

app.listen(port, () => console.log(`API running on port ${port}`));