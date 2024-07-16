const mongoose = require('mongoose');
const { Schema } = mongoose;

const institutionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    haveAccommodation: {
        type: Boolean,
        required: false
    },
    hasAssistanceRemained: {
        type: Boolean,
        required: true
    },

}, { timestamps: true });

const Institution = mongoose.model("Institution", institutionSchema);

module.exports = {
    Institution,
    institutionSchema
}