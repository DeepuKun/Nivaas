import {v2 as cloudinary} from "cloudinary"
import Room from "../models/Room.js";

export const createRoom = async (req, res) =>{
    try {
        const {roomType, pricePerNight, amenitites} = req.body;
        const hotel = await Hotel.findOne({owner:req.auth.userId})

        if(!hotel) return res.json({success: false, message : "No Hotel Found! "})

            const uploadImages = req.files.map(async (file)=>{
            const response = await cloudinary.uploader.upload(file.path);
            return response.secure_url;
            })

            const images = await Promise.all(uploadImages)

            await Room.create({
                hotel:hotel._id,
                roomType,
                pricePerNight : +pricePerNight,
                amenitites:JSON.parse(amenitites),
                images
            })
            res.json({success:true, message: "Room Created Successfully"})
    } catch (error) {
        res.json({success:false, message:error.messsage})
    }
}

export const getRooms = async (req, res) =>{
    try {
       const room =  await Room.find({isAvailable:true}).populate({
        path:'hotel',
        populate:{
            path:'owner',
            select:'image'
        }
            
        
       }).sort({createdAt:-1})
       res.json({success:true , rooms})
    } catch (error) {
        res.json({success:false , message : error.messsage})
    }
}

export const getOwnerRooms = async (req, res) =>{
    try {
        const hotelData = await Hotel({owner:req.auth.userId})
        const rooms = await Room.find({hotel:hotelData._id.toString()}).populate("hotel");
        res.json({success:true , rooms})
    } catch (error) {
        res.json({success:false , message : error.messsage})
    }
}

export const toogleRoomAvailability = async (req, res) =>{
    try {
        const {roomId} = req.body;
        const roomData = await Room.findById(roomId);
        roomData.isAvailable=!roomData.isAvailable;
        await roomData.save();

        res.json({success:true , message : "Room Availability Updated"})
    } catch (error) {
        res.json({success:false , message : error.messsage})
    }
}