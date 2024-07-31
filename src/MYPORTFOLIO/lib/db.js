const mongoose=require('mongoose');
const ConnectDb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://KRITIKKUMAR:MUNDABENZ@cluster0.qyvjbzi.mongodb.net/MYPORTFOLIO?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDb Connected.......")
    }catch(e){
        console.log("Connection Error....")
    }
}
module.exports=ConnectDb;