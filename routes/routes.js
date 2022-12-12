//import express
import express from 'express';

//import page controller
import {Home, About, Contact} from '../controllers/pages.js';

//initialization of express router
const router = express.Router();

//home route
router.get('/', Home)

//about route
router.get('/about', About)

//contact route
router.get('/contact', Contact)

export default router;