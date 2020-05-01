const { Router } = require('express');
const { check } = require('express-validator');
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const router = new Router();

const userController = require('../controllers/User.controller');

router.post('/singup', userController.signup);
router.post('/singin', userController.signin);

// router.post(
// 	'/signup',
// 	[
// 		check('login', "Don't correct login").isAlphanumeric(),
// 		check('password', 'Min length of password is 8 symbols').isLength({
// 			min: 8,
// 		}),
// 	],
// 	async (req, res) => {
// 		try {
// 			const errors = validationResult(req);

// 			if (!errors.isEmpty()) {
// 				return res.status(400).json({
// 					errors: errors.array(),
// 					message: "Don't correct signup data",
// 				});
// 			}

// 			const { login, password } = req.body;
// 			const userExist = User.findOne({ login });

// 			if (userExist) {
// 				return res
// 					.status(200)
// 					.json({ message: 'User with currenty email already exist!' });
// 			}
// 			const hashedPassword = await bcrypt.hash(password, 129);

// 			const user = new User({ login, hashedPassword });
// 			await user.save();
// 			return res.status(201).json({ message: 'User is successfully created' });
// 		} catch (error) {
// 			res.status(500).json({ message: 'Somethig wrong!' });
// 		}
// 	}
// );
// router.post('signin', async(req, res));

module.exports = router;
