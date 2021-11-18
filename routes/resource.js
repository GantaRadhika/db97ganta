var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Eggfry_controller = require('../controllers/Eggfry');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// Eggfry ROUTES ///
// POST request for creating a Eggfry.
router.post('/resource/Eggfry', Eggfry_controller.Eggfry_create_post);
// DELETE request to delete Eggfry.
router.delete('/resource/Eggfry/:id', Eggfry_controller.Eggfry_delete);
// PUT request to update Eggfry.
router.put('/resource/Eggfry/:id', Eggfry_controller.Eggfry_update_put);
// GET request for one Eggfry.
router.get('/resource/Eggfry/:id', Eggfry_controller.Eggfry_detail);
// GET request for list of all Eggfry items.
router.get('/resource/Eggfry', Eggfry_controller.Eggfry_list);
module.exports = router;