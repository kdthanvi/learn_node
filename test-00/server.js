// server.js

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended : true}));

MongoClient.connect(db.url, (err, database) => {
	if (err) return console.log(err)
	db1 = database.db("local")
	require('./app/routes')(app, db1);
	
	app.listen(port, () => {
	console.log('running on ' + port)
	});
})
