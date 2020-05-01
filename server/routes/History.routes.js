const { Router } = require('express');
const User = require('../models/History.model');
const router = new Router();
const auth = require('../config/middleware');

const historyController = require('../controllers/History.controller');

router.post('/create', auth, historyController.create);
router.get('/read', auth, historyController.read);
router.put('/update', auth, historyController.update);
router.delete('/delete', auth, historyController.delete);

module.exports = router;
