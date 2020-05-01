const { Schema, model, Types } = require('mongoose');

const HistorySchema = new Schema({
	city: {
		type: String,
		required: true,
	},
	weather: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
	},
	userId: {
		type: Types.ObjectId,
		ref: 'User',
	},
});
module.exports = model('History', HistorySchema);
