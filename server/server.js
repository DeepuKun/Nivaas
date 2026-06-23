import express from "express"
import "dotenv/config"
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from "./controllers/clerkWebHooks.js";
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import hotelRouter from "./routes/hotelRoutes.js";
import roomRouter from "./routes/roomRoutes.js";

connectDB()
connectCloudinary()


const app = express()
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.use("/api/clerk", clerkWebHooks)
app.get('/', (req, res) => {
  console.log("REQUEST HIT");
  res.send("UPDATED API WORKING WELL");
});

app.use('/api/user', userRouter)
app.use('/api/hotels',hotelRouter)
app.use('/api/rooms', roomRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}` ));