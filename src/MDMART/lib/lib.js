const mongoose=require('mongoose');
const Db=async()=>{
    try{
        await mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/MDMARTS?retryWrites=true&w=majority&appName=Cluster0");
        console.log("mdmart connected to db...");
    }catch(e){
        console.log("Connection Error...")
    }
}
module.exports=Db;