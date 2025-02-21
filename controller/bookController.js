import User from "../models/userSchema.js";


const checkAvailability = async(req, res)=>{
    try {
        
        const data = await User.findOne({email:req.user.email});

        if(!data){
            return res.status(400).json({msg:"User not found"});
        }
        data.BookId.push()
        console.log(data.BookId);
        res.send("Done");

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal Server Error"});
    }
};

export {checkAvailability};