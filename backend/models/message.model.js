import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  aenderId:{type: mongoose.Schema.Types.ObjectId, ref: "User" , required: true},
  receiverId:{type: mongoose.Schema.Types.ObjectId, ref: "User" , required: true},
  message:{type: String, required: true},
  timestamp:{type: Date, default: Date.now},
});

const Message = mongoose.model("Message", messageSchema);
export default Message;