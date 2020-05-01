const { Schema, model, Types } = require('mongoose');

const UserSchema = new Schema({
	login: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	histories: [
		{
			type: Types.ObjectId,
			ref: 'History',
		},
	],
});
module.exports = model('User', UserSchema);
