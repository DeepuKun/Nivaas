import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { createRoom, getOwnerRooms, getRooms, toogleRoomAvailability } from "../controllers/roomCOntroller.js";

const roomRouter = express.Router();

roomRouter.post('/',upload.array("images", 4, protect, createRoom))

roomRouter.get('/',getRooms)

roomRouter.get('/owner',protect, getOwnerRooms)

roomRouter.post('/toogle-availability',protect, toogleRoomAvailability)

export default roomRouter