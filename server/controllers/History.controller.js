const HistoryModel = require('../models/History.model');
const config = require('../config/default');

module.exports = {
	create: async (req, res) => {
		try {
			const { city, weather, date } = req.body;
			const historyExist = await HistoryModel.findOne({ city, date });

			if (historyExist) {
				return res.json({ history: historyExist });
			}

			const history = new HistoryModel({
				city,
				weather,
				date,
				userId: req.user.userId,
			});
			await history.save();
			res.status(201).json({ history });
		} catch (error) {
			res.status(500).json({ error });
		}
	},
	read: async (req, res) => {},
	update: async (req, res) => {},
	delete: async (req, res) => {},
};
