var Eggfry = require('../models/Eggfry'); 
 
// List of all Eggfry 

exports.Eggfry_list = async function(req, res) { 
    try{ 
        theEggfry = await Eggfry.find(); 
        res.send(theEggfry); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

 
// for a specific Eggfry. 
exports.Eggfry_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Eggfry detail: ' + req.params.id); 
}; 
 
// Handle Eggfry create on POST. 
// Handle Eggfry create on POST. 
exports.Eggfry_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Eggfry(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Eggfry_type":"goat", "cost":12, "size":"large"} 
    document.Onions = req.body.Onions; 
    document.spice = req.body.spice; 
    document.curry = req.body.curry; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.Eggfry_view_all_Page = async function(req, res) { 
    try{ 
        theEggfry = await Eggfry.find(); 
        res.render('Eggfry', { title: 'Eggfry Search Results', results: theEggfry }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// Handle Eggfry delete form on DELETE. 
exports.Eggfry_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Eggfry delete DELETE ' + req.params.id); 
}; 
 
// Handle Eggfry update form on PUT. 
exports.Eggfry_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Eggfry update PUT' + req.params.id); 
}; 