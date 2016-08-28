/**
 * Created by yinka_000 on 2016-08-26.
 */
var express = require('express');
var router = express.Router();

var ElementModel = require('../models/element');

/* GET home page. */
router.get('/allElements', function(req, res, next) {
    console.log("Getting all Elements");
    // res.json({message: "All elements"});
    ElementModel.find(function(err, elements) {
        if (err)
            res.send(err);
        res.json(elements);
        console.log(elements);
    });
});

router.post('/newElement', function(req, res, next) {
    console.log("Getting all Elements");
    //console.log(req.body);
    var newElement = new ElementModel();

            newElement.symbol = req.body.symbol;
            newElement.appearance = req.body.appearance;
            newElement.atomic_number = req.body.atomic_number;
            // newElement.group = req.body.group;
            newElement.period = req.body.period;
            newElement.element_category = req.body.element_category;
            newElement.standard_atomic_weight = req.body.standard_atomic_weight;
            newElement.electron_configuration = req.body.electron_configuration;
            newElement.per_shell = req.body.per_shell;
            newElement.phase = req.body.phase;
            newElement.melting_point = req.body.melting_point;
            newElement.boiling_point = req.body.boiling_point;
            newElement.density = req.body.density;
            newElement.heat_of_fusion = req.body.heat_of_fusion;
            newElement.heat_of_vaporization = req.body.heat_of_vaporization;
            newElement.molar_heat_capacity = req.body.molar_heat_capacity;
            newElement.ionization_energies = req.body.ionization_energies;
            newElement.covalent_radius = req.body.covalent_radius;
            newElement.crystal_structure = req.body.crystal_structure;
            newElement.discovery = req.body.discovery;
            newElement.summary = req.body.summary;

    console.log(newElement);

    var promise = newElement.save();
    promise.then(function(element){
        console.log("Saved");
        res.json({messge: "saved"});
    })
});


module.exports = router;