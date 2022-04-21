var forest = require('../models/forest');
// List of all forest
exports.forest_list = async function (req, res) {
    try {
        theforestes = await forest.find();
        res.send(theforestes);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific forest.
//exports.forest_detail = async function (req, res) {
    //res.send('NOT IMPLEMENTED: forest detail: ' + req.params.id);
    // for a specific forest. 
exports.forest_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await forest.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found}`); 
    } 
}; 
exports.forest_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await forest.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.forest_location)  
               toUpdate.forest_location = req.body.forest_location; 
        if(req.body.forest_size)
               toUpdate.forest_size = req.body.forest_size; 
        if(req.body.forest_name)  
                toUpdate.forest_name = req.body.forest_name; 
        let result = await toUpdate.save(); 
        console.log("Success " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`); 
    } 
}; 

// Handle forest create on POST.
exports.forest_create_post = async function (req, res) {
    let document = new forest();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"forest_type":"goat", "cost":12, "size":"large"}
    document.forest_name = req.body.forest_name;
    document.forest_location = req.body.forest_location;
    document.forest_size = req.body.forest_size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle forest delete form on DELETE.
exports.forest_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await forest.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle forest update form on PUT.
exports.forest_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: forest update PUT' + req.params.id);
};

exports.forest_view_all_Page = async function (req, res) {
    try {
        theforestes = await forest.find();
        console.log(theforestes)
        res.render('forest', { title: 'forest Search Results', results: theForestes });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
exports.forest_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await forest.findById( req.query.id) 
        res.render('forestdetail',  
{ title: 'forest Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 