const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, Oh Gran Gurú Don Lucho Portuano!');
});

module.exports = router;

