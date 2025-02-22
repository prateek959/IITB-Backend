import Book from "../models/librarySchema.js";
import User from "../models/userSchema.js";


const checkAvailability = async(req, res)=>{
    try {
        const id = req.params.id;

        const book = await Book.findById(id);

        if(!book || book.status == "borrowed"){
            return res.status(400).json({msg:"Book is not available"});
        }

        const data = await User.findOne({email:req.user.email});

        if(!data){
            return res.status(400).json({msg:"User not found"});
        }


        data.BookId.push(id);
        console.log(data.BookId);
        res.send("Done");

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal Server Error"});
    }
};


const returnBook = async(req, res)=>{
    try {
        const id = req.params.id;

        const book = await Book.findById(id);

        if(!book){
            return res.status(400).json({msg:"Book is not available"});
        }

        if(book.status !== "borrowed"){
            return res.status(400).json({msg:"Currently book is available"});
        }

        const data = await User.findOne({email:req.user.email});

        if(!data){
            return res.status(400).json({msg:"User not found"});
        }

        data.filter((elem)=>{
            elem !== id
        });

        res.status(200).json({msg:"Book return successfully"});
        

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal Server Error"});
    }
};

export {checkAvailability, returnBook};