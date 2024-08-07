import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
// import joi from "joi";

export const sendMessage = async (req, res, next) => {
  try {
    // const { error } = validate(req.body, messageSchema);
    // if (error) {
    //   return next(error);
    // }

    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    conversation.messages.push(newMessage._id);
    await Promise.all([conversation.save(), newMessage.save()]);

    // Socket.io integration goes here

    res.status(201).json(newMessage);
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const { id: userToMessage } = req.params;
    const senderId = req.user.id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToMessage] },
    }).populate('messages');
    if (!conversation) {
      return next(errorHandler(202, 'Conversation not found'));
    }

    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
};