var Eggfry = require('../models/Eggfry');
// List of all Eggfrys
exports.Eggfry_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Eggfry list');
};
// for a specific Eggfry.
// for a specific Eggfry.
exports.Eggfry_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Eggfry.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle Eggfry create on POST.
exports.Eggfry_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Eggfry();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Eggfry_type":"regular", "quantity":13, "cost":43.56}
    document.Onions = req.body.Onions;
    document.spices = req.body.spices;
    document.curry = req.body.curry;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Eggfry delete on DELETE.
exports.Eggfry_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Eggfry.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Eggfry update form on PUT.
exports.Eggfry_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Eggfry.findById( req.params.id)
 // Do updates of properties
 if(req.body.Onions)
 toUpdate.Onions = req.body.Onions;
 if(req.body.spices) toUpdate.spices = req.body.spices;
 if(req.body.curry) toUpdate.curry = req.body.curry;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all Eggfrys
exports.Eggfry_list = async function (req, res) {
    try {
        theEggfry = await Eggfry.find();
        res.send(theEggfry);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.Eggfry_view_all_Page = async function (req, res) {
    try {
        theEggfry = await Eggfry.find();
        res.render('Eggfry', {
            title: 'Eggfry Search Results',
            results: theEggfry
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.Eggfry_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Eggfry.findById( req.query.id)
    res.render('Eggfrydetail',
   { title: 'Eggfry Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a Eggfry.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Eggfry_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Eggfrycreate', { title: 'Eggfry Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a Eggfry.
// query provides the id
exports.Eggfry_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Eggfry.findById(req.query.id)
    res.render('Eggfryupdate', { title: 'Eggfry Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.Eggfry_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Eggfry.findById(req.query.id)
    res.render('Eggfrydelete', { title: 'Eggfry Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };