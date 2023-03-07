const express= require("express");
const  router=express.Router();
const {
    getallproducts,gettesting,
}=require("../controller/products");

router.route("/").get(getallproducts);
router.route("/testing").get(gettesting);

module.exports = router;
