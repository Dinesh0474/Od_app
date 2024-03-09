const express=require('express')
const router= express.Router();
const requesters= require("../model/schema")

router.post("/login",(req,res)=>{
    if(req.body.username==="000" && req.body.password==="123"){
        res.json("OK")
    }
    else{
        res.json("NOT OK")
    }
})

router.get("/allrequests",async (req,res)=>{
    try {
        const filteredList = await requesters.find({ status: 4 });
        res.status(200).json(filteredList);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
})

router.post("/grant",async (req,res)=>{
    const request_id = req.body.id;
    const Update =  await requesters.findOneAndUpdate(
        {sid:req.body.id},
        {status:1},
    )
    res.json("Success")
})

router.post("/changeslot",async (req,res)=>{
    const request_id = req.body.id;
    const Update =  await requesters.findOneAndUpdate(
        {sid:req.body.id},
        {slot:req.body.slot}
    )
    res.json("Success")
})


router.post("/revoke",async (req,res)=>{
    const request_id = req.body.id;
    const Update = await requesters.findOneAndUpdate(
        {sid:req.body.id},
        {status:2},
    )
    res.json("Success")
})

router.get("/current", async (req,res)=>{
    try {
        const filteredList = await requesters.find({ status: 1 });
        res.json(filteredList);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
})

router.get('/clear', async (req, res) => {
  try {
    // Remove all documents from the 'requesters' collection
    await requesters.deleteMany({});
    res.json('All data cleared successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports=router;
