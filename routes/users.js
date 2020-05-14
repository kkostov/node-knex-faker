var express = require('express');
var router = express.Router();
const db = require('../db')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const results = await db("users").select("*").orderBy("name")

  res.send({results});
});

module.exports = router;
