const getallproducts4=async(req,res)=>
{
    res.status(200).json({msg: "updating laptops"})
};
const gettesting4=async(req,res)=>
{
    res.status(200).json({msg: "updating all laptops with price"})
};
module.exports={gettesting4,getallproducts4};