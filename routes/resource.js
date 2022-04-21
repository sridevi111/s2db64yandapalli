var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var forest_controller = require('../controllers/forest');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/resource/forestes', forest_controller.forest_create_post);
// DELETE request to delete Costume.
router.delete('/resource/forestes/:id', forest_controller.forest_delete);
// PUT request to update Costume.
router.put('/resource/forestes/:id',forest_controller.forest_update_put);
// GET request for one Costume.
router.get('/resource/forestes/:id', forest_controller.forest_detail);
// GET request for list of all Costume items.
router.get('/resource/forestes', forest_controller.forest_list);
module.exports = router;