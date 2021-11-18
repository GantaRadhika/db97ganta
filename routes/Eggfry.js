var express = require('express');
const Eggfry_controlers= require('../controllers/Eggfry');
var router = express.Router();
/* GET Eggfry */
router.get('/', Eggfry_controlers.Eggfry_view_all_Page );
/* GET detail Eggfry page */
router.get('/detail', Eggfry_controlers.Eggfry_view_one_Page);
/* GET create Eggfry page */
router.get('/create', Eggfry_controlers.Eggfry_create_Page);
/* GET create update page */
router.get('/update', Eggfry_controlers.Eggfry_update_Page);
/* GET create Eggfry page */
router.get('/delete', Eggfry_controlers.Eggfry_delete_Page);


module.exports = router;
