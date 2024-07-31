const express=require('express');
const app=express();
const ConnectDb=require('./src/MYPORTFOLIO/lib/db');
ConnectDb();
const cors=require('cors');
app.use(cors());
const router=require('./src/MYPORTFOLIO/router/router');
app.use(router);
app.listen(5000,()=>{
    console.log("I am listen in 5000...");
})