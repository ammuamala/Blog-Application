import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRoutes from "./routes/blog.routes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

// app.use(
//   cors({
//     origin: ["http://localhost:3000/"],
//     methods: "GET,POST,PUT,PATHCH,HEAD,DELETE",
//     credentials : true
//   })
// );

// app.use(cors({
//     origin: function(origin, cb){
//         return cb(null, true)
//     }
// }))

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(blogRoutes)

app.get("/",(req,res,next)=>{
    res.send("Testing.....!")
})

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB connected successfully`);
  } catch (error) {
    console.log("DB connection error", error);
  }
};

connectDB()
  .then(() => {
    app.listen(port);
    console.log(`Server is running in port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });