const getallproducts3=async(req,res)=>
{
    res.status(200).json({msg: "deleting laptops"})
};
const gettesting3=async(req,res)=>
{
    res.status(200).json({msg: "deleting laptops with price"})
};
module.exports={gettesting3,getallproducts3};