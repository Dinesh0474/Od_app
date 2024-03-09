const express=require('express')
const router= express.Router();
const {getname,addrequest,getstatus}= require('../controllers/student')
router.post("/name",getname)

router.post("/odreq",addrequest)

router.post("/status",getstatus)

module.exports=router;