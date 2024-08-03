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
  username: z.string().min(1, 'Username is required'),
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(8, 'Password must be at least 8 characters').max(128, 'Password must be at most 128 characters'),
  gender: z.string().min(1, 'Gender is required').refine(val => ['Male', 'Female', 'Other'].includes(val), { message: 'Invalid gender' }),
  profilePicture: z.string().min(1, 'Profile picture is required').url(),
});

const User = mongoose.model('User', userSchema);

export default User;

export const validateUser = (data) => userValidationSchema.parse(data);