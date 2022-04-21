var express = require('express');
const forest_controlers= require('../controllers/forest');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('forest', { title: 'Search Resultsforest' });
// });

router.get('/',forest_controlers.forest_view_all_Page );
router.get('/detail',forest_controlers.forest_view_one_Page); 
router.get('/create',forest_controlers.forest_create_Page); 
router.get('/update',forest_controlers.forest_update_Page); 
router.get('/delete',forest_controlers.forest_delete_Page); 
 
 

module.exports = router;