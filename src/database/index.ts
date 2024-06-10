import mongoose from "mongoose";

export default async function cunnectToDB() {
    try {
        await mongoose.connect('mongodb+srv://rahulbanik98:rahulbanik98@cluster0.fnn6tpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("db connect sussesfully");

    } catch (error) {
        console.log("error in connection function ==>> ", error);
    }
} 