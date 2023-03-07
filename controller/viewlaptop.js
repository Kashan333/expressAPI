const getallproducts2=async(req,res)=>
{
    res.status(200).json({msg: "viewing laptops"})
};
const gettesting2=async(req,res)=>
{
    res.status(200).json({msg: "viewing laptops price"})
};
module.exports={gettesting2,getallproducts2};