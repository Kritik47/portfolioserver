const express=require('express');
const router=express.Router();
const SkillPost =require('../controller/SkillPost');
const SkillGet=require('../controller/SkillGet');
const ProjectGet =require('../controller/ProjectGet');
const ProjectPost=require('../controller/ProjectPost');
router.use(express.json());
//API FRO SKILL
router.post("/skillmyportfolio",SkillPost);
router.get('/skillmyportfolio',SkillGet);
//API FOR PROJECT
router.post("/projectmyportfolio",ProjectPost);
router.get("/projectmyportfolio",ProjectGet);
module.exports=router;