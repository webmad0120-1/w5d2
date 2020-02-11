const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
 prop1: String
});

const Model = mongoose.model('airports', schemaName);
module.exports = Model;