const {Router} = require("express");
const express = require("express");
const {GetHomePageData , categoryControl , idControl} = require("../controllers/home.controller");

const homerouter=express.Router();

homerouter.get("/home",GetHomePageData);
homerouter.get("/category",categoryControl);
homerouter.get("/article/:id",idControl);
module.exports = homerouter;





// const { Router } = require("express");
// const express = require("express");
// const router = express.Router();
// const { GetHomePage,GetSingleProduct,GetSingleCategory }=require("../controllers/home.controller");


// const homerouter=express.Router();

// homerouter.get("/", GetHomePage)
// homerouter.get("/category", GetSingleCategory);
// homerouter.get("/article/:cat/:id", GetSingleProduct);

// module.exports=homerouter;







// const express =require("express");
// const homerouter=express.Router();
// const { data , idControl , categoryControl } = require("../controllers/data")

// homeRouter.get("/home", data)
// homeRouter.get("/category",categoryControl)
// homeRouter.get("/article/:id", idControl)

// //homeRouter.get("/article/:id",data)

// module.exports = homeRouter