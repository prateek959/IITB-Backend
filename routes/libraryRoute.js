import express from 'express';
import { auth, role } from '../middlewear/authMiddlewear.js';
import { addBook, deleteBook, updateBook } from '../controller/libraryController.js';
import { deleteUser, getUser, register, updateUser } from '../controller/userController.js';

const libraryRouter = express.Router();

libraryRouter.post('/add',auth,role("librarian"),addBook);
libraryRouter.put('/update/:id',auth,role("librarian"),updateBook);
libraryRouter.delete('/delete/:id',auth,role("librarian"),deleteBook);


libraryRouter.post('/user/add',auth,role("librarian"),register);
libraryRouter.get('/user/:id',auth,role("librarian"),getUser);
libraryRouter.put('/user/:id',auth,role("librarian"),updateUser);
libraryRouter.delete('/user/:id',auth,role("librarian"),deleteUser);


export default libraryRouter;