const express= require("express");  
const app=express();
const port=5000;
const products_routes= require("./routes/products");
app.get("/",(req,res)=>
{
res.send("hi i am live");
});
app.use("/api/user",products_routes);
app.get("/",(req,res)=>
{
res.send("hi i am live");
});
app.use("/api/products",products_routes);
app.get("/",(req,res)=>
{
res.send("hi i am live");
});
app.use("/api/viewlaptops",products_routes);
app.get("/",(req,res)=>
{
res.send("hi i am live");
});
app.use("/api/updatelaptops",products_routes);
const start=async()=>
{
    try{

        app.listen(port,()=>{
          console.log(  `${port} yes I am connected`);
        })
    }
    catch(error){
        console.log(error);
    }
};
start();