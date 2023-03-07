const getallproducts=async(req,res)=>
{
    res.status(200).json({msg: "I am geting all products"})
};
const gettesting=async(req,res)=>
{
    res.status(200).json({msg: "I am testing"})
};
module.exports={gettesting,getallproducts};