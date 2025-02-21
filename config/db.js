import mongoose from "mongoose";

const db = async(req, res)=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected Successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal Server Error"});
    }
};

export default db;