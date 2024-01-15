'use strict';
const express=require('express');

const app = express();
const port=2000
app.get('/', (req, res) =>{
   res.send("Suswagatam")
})

app.listen(2000, console.log("Seeing on port " + port));

