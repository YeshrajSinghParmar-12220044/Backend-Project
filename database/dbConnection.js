import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName: "event"})
    .then(()=>{
        console.log("Connected to database!");
    })
    .catch((err)=>{
        console.log("Show error occured while connecting to datatbase:",err);
    });
};