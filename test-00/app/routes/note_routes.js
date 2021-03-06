// routes/note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db1) {
	
	app.get('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		db1.collection('notes').findOne(details, (err, item) =>{
		if(err){
			res.send({'error' : 'an error has occurred'});
			}
		else {
			res.send(item);
			}
		});	
	});

	app.post('/notes', (req, res) => {
		const note = { text : req.body.body, title : req.body.title };
		db1.collection('notes').insert(note, (err, result) => {
		if (err) {
			res.send({'error' : 'an error as occurred'});
			}
		else {
			res.send(result.ops[0]);	
			}
		});
	});

	app.delete('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id' : new ObjectID(id) };
		db1.collection('notes').remove(details, (err, item) => {
			if(err){
				res.send({'error' : 'an error has occurred!'});
			}
			else{
				res.send('Note'+ id + 'deleted!');
			}
		});
	});

	app.put('/notes/:id', (req, res) => {
		const id = req.params.id;
		const details = {'_id' : new ObjectID(id)};
		const note = {text : req.body.body, title : req.body.title };
		db1.collection('notes').update(details, note, (err, item) => {
			if(err){
				res.send({'error' : 'an error has occurred'});
			}
			else{
				res.send(note);
			}
		});
	
	});
};
