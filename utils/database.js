import mongoose from "mongoose";
let isConnected = false;
const connectToDb= async () => {
    mongoose.set('strictQuery',true);
    if(isConnected){
        console.log("MongoDB Connected..Using existing connection");
        return;
    }
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"promptpal",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        isConnected = true;
        console.log("MongoDB Connected..");
    } catch(error){
        console.log("Error connecting to DB",error);
    }
}