const Skill=require('../model/skillmodel');
const SkillGet=async(req,res)=>{
    try{
        const m=await Skill.find({});
        res.send({msg:"SkillGeting.....",DATA:m})
    }catch(e){
        res.send({msg:"SkillGet Error...."});
    }
}
module.exports=SkillGet;