import express from "express";
import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  timestamps: { createdAt: true, updatedAt: true },
});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
