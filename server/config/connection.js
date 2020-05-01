const mongoose = require('mongoose');
const config = require('./default');

const connectToRemoteDB = async () => {
	await mongoose.connect(config.dbURL, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
	});
};
module.exports = connectToRemoteDB;
