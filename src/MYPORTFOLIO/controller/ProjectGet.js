const Project=require('../model/projectmodel');
const ProjectGet=async(req,res)=>{
    try{
        const m=await Project.find({});
        res.send({msg:"Project Getting....",DATA:m});
    }catch(e){
        res.send({msg:"ProjectGetting Error...."});
    }
}
module.exports=ProjectGet;