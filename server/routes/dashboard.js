const router = require("express").Router();
const authorization = require("../middleWare/authorization");
const User = require('../database');
const { where } = require("sequelize");


router.get("/",authorization,async(req,res)=>{

    try {
        //req.user has the payload
       //res.json(req.user);

       const user = await User.findOne ({
        where:{id: user.id},
        attributes:[user_name]
       }
       );
       res.json(user);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).json("server error");
    }
});
module.exports = router;
