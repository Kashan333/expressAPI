const getallproducts1=async(req,res)=>
{
    res.status(200).json({msg: "ALL products"})
};
const gettesting1=async(req,res)=>
{
    res.status(200).json({msg: "I am testing"})
};
module.exports={gettesting1,getallproducts1};