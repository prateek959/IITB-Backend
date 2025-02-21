import mongoose from 'mongoose';

const librarySchema = new mongoose.Schema({
    title:{type:String, required:true},
    author:{type:String, required:true},
    publicationYear:{type:String, required:true},
    status:{type:String,enum:["available","borrowed"],default:"available"}
});

const Book = mongoose.model('book',librarySchema);

export default Book;
