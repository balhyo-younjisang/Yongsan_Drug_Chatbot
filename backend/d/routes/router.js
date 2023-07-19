const express = require('express');
const { callChatGpt } = require('../controller/controller');
const router = express.Router();

router.post('/callGpt', (req, res) => {
    const client_messege = req.body.client_messege;
    res.send(callChatGpt(client_messege)).statusCode(200);
});

router.get('/', (req, res) => {
    console.log('e sibal');
    res.send('dsas')
})

module.exports = router;