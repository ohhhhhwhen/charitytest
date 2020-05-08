const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const charitySchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    cause: String,
    description: String,
    rating: String,
    link: String,
});

const Charity = mongoose.model(`Charity`, charitySchema);

module.exports = Charity;
