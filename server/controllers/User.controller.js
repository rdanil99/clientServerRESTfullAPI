const UserModel = require('../models/User.model');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('../config/default');

module.exports = {
	signup: async (req, res) => {
		try {
			console.log('try');
			const errors = validationResult(req);

			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: "Don't correct signup data",
				});
			}

			const { login, password } = req.body;
			console.log(`login ${login} : pass ${password}`);
			const userExist = await UserModel.findOne({ login });
			console.log('userExist', userExist);
			if (userExist) {
				console.log('userExistCLG');
				return res
					.status(400)
					.json({ message: 'User with currenty login already exist!' });
			}
			const hashedPassword = await bcrypt.hash(password, 7);
			console.log('1');
			const user = new UserModel({ login, password: hashedPassword });
			const savedUser = await user.save();

			let token = jwt.sign(
				{
					userId: savedUser._id,
				},
				config.jwtSecret,
				{ expiresIn: '0.5h' }
			);
			return res.status(201).json({ token, userId: savedUser._id });
		} catch (error) {
			console.log(error);
			res.status(500).json({ error });
		}
	},
	signin: async (req, res) => {
		try {
			const errors = validationResult(req);
			console.log('singin');
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(),
					message: "Don't correct signup data",
				});
			}
			console.log('1');
			const { login, password } = req.body;
			const user = await UserModel.findOne({ login });

			if (!user) {
				return res.status(400).json({ meassage: 'User not found' });
			}
			console.log('2');
			const isPasswordMatch = await bcrypt.compare(password, user.password);

			if (!isPasswordMatch) {
				res.status(400).json({ meassage: 'Invalid password' });
			}

			let token = jwt.sign(
				{
					userId: user._id,
				},
				config.jwtSecret,
				{ expiresIn: '1h' }
			);

			res.json({ token, userId: user._id });
		} catch (error) {
			res.status(500).json({ error });
		}
	},
};
