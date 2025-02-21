import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String, unique:true},
    password:{type:String},
    role:{type:String, enum:["librarian","member"],default:"member"},
    BookId:{type:[mongoose.Schema.Types.ObjectId], ref:'book'}
});

const User = mongoose.model('user',userSchema);

export default User;