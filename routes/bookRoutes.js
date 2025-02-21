import express from 'express';
import { auth, role } from '../middlewear/authMiddlewear.js';
import { checkAvailability } from '../controller/bookController.js';

const bookRouter = express.Router();

bookRouter.post('/check',auth,role("member"),checkAvailability);

export default bookRouter;