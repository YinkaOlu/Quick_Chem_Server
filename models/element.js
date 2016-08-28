/**
 * Created by yinka_000 on 2016-08-26.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ElementSchema = new Schema({
    symbol: String,
    appearance: String,
    atomic_number: String,
    group: String,
    period: String,
    element_category: String,
    standard_atomic_weight: String,
    electron_configuration: String,
    per_shell: String,
    phase: String,
    melting_point: String,
    boiling_point: String,
    density: String,
    heat_of_fusion: String,
    heat_of_vaporization: String,
    molar_heat_capacity: String,
    ionization_energies: String,
    covalent_radius: String,
    crystal_structure: String,
    discovery: String,
    summary: String
});

var Element = mongoose.model('Element', ElementSchema);

module.exports = Element;