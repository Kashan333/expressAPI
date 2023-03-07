const express= require("express");
const  router=express.Router();


const {
    getallproducts,gettesting,
}=require("../controller/user");
const {
    getallproducts1,gettesting1,
}=require("../controller/products");
const {
    getallproducts2,gettesting2,
}=require("../controller/viewlaptop");
const {
    getallproducts3,gettesting3,
}=require("../controller/deletelaptop");
const {
    getallproducts4,gettesting4,
}=require("../controller/updatelaptop");


router.route("/check").get(getallproducts);
router.route("/login").get(gettesting);
router.route("/test1").get(getallproducts1);
router.route("/test2").get(gettesting1);
router.route("/view").get(getallproducts2);
router.route("/viewall").get(gettesting2);
router.route("/del").get(getallproducts3);
router.route("/delall").get(gettesting3);
router.route("/update").get(getallproducts4);
router.route("/updateall").get(gettesting4);
module.exports = router;

