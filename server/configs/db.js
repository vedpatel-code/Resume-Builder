import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on("connected",()=>{console.log("Database connected successfully")})

        let mongodbURl = process.env.MONGODB_URL;
        const projectName = 'resume-builder';

        if(!mongodbURl) {
            throw new Error("MONGODB_URL enviroment variable not set");
        }

        if(mongodbURl.endsWith('/')){
            mongodbURl = mongodbURl.slice(0,-1)
        }

        await mongoose.connect(`${mongodbURl}/${projectName}`)
    } catch (error){
        console.error("Erro connecting to MongoDB:",error)
    }
}
export default connectDB;