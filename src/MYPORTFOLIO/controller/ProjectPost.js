const Project=require('../model/projectmodel');
const ProjectPost=async(req,res)=>{
    try{
        let m=await Project.create(req.body);
        m=await m.save();
        res.send({msg:"Project Posting....",DATA:m});
    }catch(e){
        res.send({msg:"ProjectPosting Error...."})
    }
}
module.exports=ProjectPost;