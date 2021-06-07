require('dotenv').config();
const uri = process.env.URI;
const dbName = process.env.DB_NAME;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const MongoClient = require('mongodb').MongoClient;
app.use(bodyParser.urlencoded({ extended: true }));

console.log(process.env);

MongoClient.connect(uri, function(err, client) {
	if (err) return process.exit(1);
	console.log("Connected successfully to database.");

	const db = client.db(dbName);

	require('./app/routes')(app, db);
});

app.listen(port, () => { console.log('Listening on ' + port); });


