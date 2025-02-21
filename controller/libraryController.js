import Book from "../models/librarySchema.js";


const addBook = async (req, res)=>{
    try {
        const {title, author, publicationYear, status} = req.body;

        const data = Book.create({
            title,
            author,
            publicationYear,
            status
        });

        res.status(201).json({msg:"Book created Successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal Server error"});
    }
};


const updateBook = async (req, res)=>{
    try {
        const {title, author, publicationYear, status} = req.body;
        const id = req.params.id;

        if(!id){
            return res.status(400).json({msg:"Id is required"});
        }

        const data = await Book.findById(id);

        if(!data){
            return res.status(400).json({msg:"Book is not available"});
        }

        if(title){
            data.title = title;
        }
        if(author){
            data.author = author;
        }
        if(publicationYear){
            data.publicationYear = publicationYear;
        }
        if(status){
            data.status = status;
        }
        res.status(201).json({msg:"Book updated Successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal Server error"});
    }
};

const deleteBook = async(req, res)=>{
    try {
        const id = req.params.id;

        if(!id){
            return res.status(400).json({msg:"Id is required"});
        }

        await Book.findByIdAndDelete(id)

          res.status(200).json({msg:"Book Deleted successfully"});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"Internal Server error"});
    }
};


export {addBook, updateBook, deleteBook};