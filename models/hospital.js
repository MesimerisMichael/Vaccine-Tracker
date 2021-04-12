var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalsSchema = new Schema({
    hospitalName: {
        type: String,
        default: '',
        required: true
    },
    address: {
        type: String,
        default: '',
        required: true
    },
    numberOfDosesAvailable: {
        type: Number,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

var Hospitals = mongoose.model('Hospital', hospitalsSchema);

module.exports = Hospitals;