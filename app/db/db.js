function addUser(name, pass, res, db) {
	const user = { _id: name, password: pass };
	db.collection('users').insert(user, (err, results) => {
		if (err) {
			console.log("ERROR");
			res.send({'error': 'An error has occured'});
		}
		else {
			console.log(name + ' added.');
			res.send({ 'error': null });
		}
	});
	const arr = new Array(48).fill(0);
	console.log(arr);
	const data = { _id: name, pattern: arr };
	db.collection('data').insert(data, (err, results) => {});
}

function authenticate(name, pass, res, db) {
	const user = { _id: name, password: pass };
	db.collection('users').findOne(user, (err, results) => { 
		if (err || results == null) {
			console.log("ERROR");
			res.send({'error': 'An error has occured'});
		}
		else {
			console.log(results);
			res.send({ 'error': null });
		}
	});
}


module.exports = { addUser: addUser, authenticate: authenticate };

