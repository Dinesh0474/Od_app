const express=require('express')
const router= express.Router();
const {list}= require("../controllers/public")

router.get("/list",list)

module.exports=router;