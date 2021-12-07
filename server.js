const express = require ('express');
const mongoose = require ('mongoose');

const {AppRouter} = require( './server/routes/appRouter' );

require( './server/config/database' );
const app = express ();


app.use(express.urlencoded({extendend:true}) );
app.use(express.json());

app.use('/', AppRouter);

app.listen (8080, function (){
    console.log ("The user server is running on 8080")
});