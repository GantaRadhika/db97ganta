var express = require("express");
const Eggfry_controlers= require('../controllers/Eggfry'); 
var router = express.Router();

/* GET home page. */
router.get('/', Eggfry_controlers.Eggfry_view_all_Page);
router.post('/', Eggfry_controlers.Eggfry_create_post);

module.exports = router;
