const express = require('express');
const { logActivity, getLogsByUser } = require('../controllers/logController');
const router = express.Router();

router.post('/log', logActivity);
router.get('/:userId', getLogsByUser);

module.exports = router;
