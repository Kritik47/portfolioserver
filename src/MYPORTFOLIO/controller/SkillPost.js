const Skill=require('../model/skillmodel');
const SkillPost=async(req,res)=>{
    try{
        let m=await Skill.create(req.body);
        m=await m.save();
        res.send({msg:"SkillPosting.....",DATA:m});
    }catch(e){
        res.send({msg:"SkillPost Error...."})
    }
}
module.exports=SkillPost;