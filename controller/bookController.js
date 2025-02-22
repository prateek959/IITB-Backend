import Book from "../models/librarySchema.js";
import User from "../models/userSchema.js";


const checkAvailability = async (req, res) => {
    try {
        const id = req.params.id;

        const book = await Book.findById(id);

        if (!book || book.status == "borrowed") {
            return res.status(400).json({ msg: "Book is not available" });
        }

        const data = await User.findOne({ email: req.user.email });

        if (!data) {
            return res.status(400).json({ msg: "User not found" });
        }

        const isBookAlreadyBorrowed = data.BookId.some((elem) => String(elem).includes(id));

        if (isBookAlreadyBorrowed) {
            return res.status(400).json({ msg: "Book is already borrowed by you" });
        };

        data.BookId.push(id);
        book.status = "borrowed"
        await book.save();
        await data.save();
        res.status(200).json({ msg: "Book borrow successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};


const returnBook = async (req, res) => {
    try {
        const id = req.params.id;

        const book = await Book.findById(id);

        if (!book) {
            return res.status(400).json({ msg: "Book is not available" });
        }

        if (book.status !== "borrowed") {
            return res.status(400).json({ msg: "Currently book is available" });
        }

        
        const data = await User.findOne({ email: req.user.email });

        if (!data) {
            return res.status(400).json({ msg: "User not found" });
        }
     
        const index = data.BookId.indexOf(id);
        if (index === -1) {
            return res.status(400).json({ msg: "User did not borrow this book" });
        }

        // console.log(index);
        data.BookId = data.BookId.filter((elem, i)=>{
            i !== index
        })

        book.status = "available"
        await book.save();
        await data.save();
        res.status(200).json({ msg: "Book return successfully" });


    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export { checkAvailability, returnBook };