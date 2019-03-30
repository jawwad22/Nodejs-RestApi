let express =require('express')
let router=express.Router();

//QuerySting =
router.get('/person',(req,res)=>{
    if(req.query.name){
        res.send(`You are at person ${req.query.name}`)
    }
    else {
        res.send('You have requested a person')
    }
})


//param property on the request objec
router.get('/person/:name',(req,res)=>{

    res.send(`You are at person  ${req.param.name}`)
})

module.exports=router