
const express=require('express');
const cors=require('cors');
const app=express();
const router=require('./src/MDMART/router/router');
const Db=require('./src/MDMART/lib/lib');
Db();
app.use(cors());
app.use(router);
app.listen(7000,()=>{
    console.log("Liste in 70000........");
});