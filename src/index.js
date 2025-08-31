//require("dotenv").config();
import dotenv from "dotenv";
dotenv.config({
    path: "./.env"
});
import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000, () => {
        console.log(`Server started at PORT ${process.env.PORT}`);
    });
    app.on("error", (err) => {
        console.log("ERROR", err);
        throw err;
    });
})
.catch((error) => {
    console.error("Failed to connect to the database!!! ", error);
    process.exit(1);
});



// ;( async() => {
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.log("ERROR", err);
//             throw err;
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server started at PORT ${process.env.PORT}`);
//         });
//     }catch(error){
//         console.log("ERROR", error);
//         throw error;
//     }
// })()