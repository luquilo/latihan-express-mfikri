//import express
import  express from 'express';

//import router
import Router from './routes/routes.js'

//init express
const app = express()

//use the router
app.use(Router);

//listen on port
app.listen(3001, () => console.log('The server is running on localhost:3001 !'))