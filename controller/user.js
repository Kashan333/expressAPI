const getallproducts=async(req,res)=>
{
    res.status(200).json({msg: "user here"})
};
const gettesting=async(req,res)=>
{
    res.status(200).json({msg: "user has log in"})
};
module.exports={gettesting,getallproducts};