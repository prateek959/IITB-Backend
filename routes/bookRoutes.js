import express from 'express';
import { auth, role } from '../middlewear/authMiddlewear.js';
import { checkAvailability, returnBook } from '../controller/bookController.js';

const bookRouter = express.Router();

bookRouter.post('/borrow/:id',auth,role("member"),checkAvailability);
bookRouter.post('/return/:id',auth,role("member"),returnBook);

export default bookRouter;