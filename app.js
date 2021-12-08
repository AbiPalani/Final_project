require("dotenv").config();
const express = require("express");
const {authentication,logging}=require("./shared/middleware")
const cors = require("cors");

const eventRoutes = require("./routes/event.route");
const userRoutes = require("./routes/user.route");


const mongo = require("./shared/mongo");



const app=express();

var corsOptions = {
    origin:"http://localhost:3000"
};


(async()=>{
    try{
        await mongo.connect();

        app.use(cors(corsOptions));

        //parse the request body to json 
        app.use(express.json());

        //routes for api
        app.use("/users",userRoutes);

        //auth middleware
        app.use(authentication);

        //logging middleware
        app.use(logging);

        app.use("/event",eventRoutes);

        app.listen(process.env.port, ()=> console.log(`Server running at port- ${process.env.port}`));
    }catch(err){
        console.log("Server starting error",err);
    }
})();
