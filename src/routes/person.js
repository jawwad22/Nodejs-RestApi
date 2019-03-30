let express =require('express')
let router=express.Router();

router.get('/person',(req,res)=>{
    res.send('You are at person')
})

module.exports=router