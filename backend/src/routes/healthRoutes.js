const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString(), service: 'Iris API' });
});

module.exports = router;
