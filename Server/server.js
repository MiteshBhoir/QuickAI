import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware, getAuth, requireAuth } from "@clerk/express";
import aiRouter from "./routes/aiRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import userRouter from "./routes/userRoutes.js";
import { auth } from "./middlewares/auth.js";

const app = express();

await connectCloudinary();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send("Server is Running!"));
app.use(clerkMiddleware()); 
app.use("/api/ai", requireAuth(), aiRouter);
app.use("/api/user", requireAuth(), userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening to PORT ${PORT}`);
});
