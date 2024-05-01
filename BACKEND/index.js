const express = require('express');
const app = express();
require('dotenv').config()

const connection = require('./DB/connection.js')
const router=require('./routes/route.js')
app.use(express.json());

app.use('/',router)
connection()
    .then(() => {
    console.log('connected');
        app.listen(3000,()=>console.log('listening'))
    })
.catch((e)=>console.log(e))

