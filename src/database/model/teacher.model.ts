import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

interface teacherDoc {
  id: ObjectId;
  name: string;
  allotClass: [ObjectId];
  gender: string;
  email: string;
  dateOfbirth: Date;
  address: string;
  profilePhoto: string;
  timestamps: boolean;
}

const teacherSchema = new mongoose.Schema<teacherDoc>(
  {
    name: {
      type: String,
      required: true,
    },
    allotClass: [ObjectId],
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dateOfbirth: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    profilePhoto: { type: String },
  },
  { timestamps: true },
);

export const teacherCollection = mongoose.model('teacher', teacherSchema);
