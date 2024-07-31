import { z } from 'zod';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128,
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female', 'Other'],
  },
  profilePicture: {
    type: String,
    required: true,
    default: 'https://via.placeholder.com/150',
  },
}, { timestamps: true });

const userValidationSchema = z.object({
  username: z.string('Username is required').nonEmpty(),
  email: z.string('Email is required').nonEmpty().email(),
  password: z.string('Password is required').nonEmpty().min(8, 'Password must be at least 8 characters').max(128, 'Password must be at most 128 characters'),
  gender: z.string('Gender is required').nonEmpty().oneOf(['Male', 'Female', 'Other']),
  profilePicture: z.string('Profile picture is required').nonEmpty().url(),
});

const User = mongoose.model('User', userSchema);

export default User;

export const validateUser = (data) => userValidationSchema.parse(data);