import mongoose, { Schema } from "mongoose";

const roomSchema = new mongoose.Schema({
    hotel: {type:String, required :true, ref:"Hotel"},
    roomType: {type:String, required :true},
    pricePerNight: {type:Number, required :true},
    amenitites: {type:Array, required :true,ref: User},
    images: [{type:String}],
    isAvailable: {type:Boolean, default: True}
}, {timestamps:true});

const Room = mongoose.model("Room", roomSchema);

export default Room;