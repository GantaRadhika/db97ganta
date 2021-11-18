// API for our resources 
const Eggfry=require("../models/Eggfry")
exports.api = function(req, res) { 
    res.write('['); 
    res.write('{"resource":"Eggfry", '); 
    res.write('  "verbs":["GET","PUT", "DELETE"] '); 
    res.write('}'); 
    res.write(']') 
    res.send(); 
}; 