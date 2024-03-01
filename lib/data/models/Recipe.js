import mongoose from 'mongoose';
import MongooseSequence from 'mongoose-sequence';

const AutoIncrement = MongooseSequence(mongoose);

const Recipe = new mongoose.Schema({
    title: {type: String, required: true},
    ingredients: {type: String, required: true},
    steps: {type: String, required: true},
    notes: String
}, {
    _id: false
});
Recipe.plugin(AutoIncrement, {id: 'recipe_seq'});

const Model = mongoose.model('Recipe', Recipe);
export default Model;