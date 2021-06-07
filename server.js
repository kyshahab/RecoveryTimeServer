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

<<<<<<< HEAD
MongoClient.connect(uri, function(err, client) {
	if (err) return process.exit(1);
	console.log("Connected successfully to database.");

	const db = client.db(dbName);
=======
const MongoClient = require('mongodb').MongoClient;
// hide with dotenv: https://forum.freecodecamp.org/t/how-to-store-a-mongodb-username-and-password-persistently-using-dotenv/50994
const uri = temp;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  client.close();
});
>>>>>>> a53e68fab0f03fee89f1324a32e7006248f1e347

	require('./app/routes')(app, db);
});

app.listen(port, () => { console.log('Listening on ' + port); });


