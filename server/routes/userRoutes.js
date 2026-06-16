import express from "express";
import { getUserData, storeRecentSearchCitites } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/', protect, getUserData);
userRouter.post('/store-recent-search', protect, storeRecentSearchCitites);

export default userRouter;