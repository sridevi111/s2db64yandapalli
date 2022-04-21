var express = require('express');
const forest_controllers=require('../controllers/forest');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forest', { title: 'Search Results Forest' });
});

router.get('/', forest_controllers.forest_view_all_Page );
/* GET detail forest page */
router.get('/detail', forest_controllers.forest_view_one_Page);
/* GET create forest page */
//router.get('/create', secured, forest_controllers.forest_create_post);
/* GET create update page */
// router.get('/update', forest_controlers.forest_update_Page);
/* GET update forest page */
//router.get('/update', secured, forest_controllers.forest_update_put);
/* GET create forest page */
//router.get('/delete', secured, forest_controllers.forest_delete_Page);

module.exports = router;