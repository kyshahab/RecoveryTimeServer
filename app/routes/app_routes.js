const db_func = require("./../db/db");
// write this function to add to database on account creation
// https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/
module.exports = function(app, db) { 
	app.post('/users/signup', (req, res) => { 
		db_func.addUser(req.body.username, req.body.password, res, db); 
	});

	app.post('/users/login', (req, res) => {
		db_func.authenticate(req.body.username, req.body.password, res, db);
	});

};

