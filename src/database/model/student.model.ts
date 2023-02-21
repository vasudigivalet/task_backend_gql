import mongoose from "mongoose";
import { ObjectId } from "mongodb";

interface studentDoc {
  id: ObjectId;
  name: string;
  profilePhoto: string;
  classId: ObjectId;
  gender: string;
  email: string;
  dateOfbirth: Date;
  address: string;
  timestamps: boolean;
}

const studentSchema = new mongoose.Schema<studentDoc>(
  {
    name: {
      type: String,
      required: true,
    },
    profilePhoto: {
      type: String,
    },
    classId: {
      type: ObjectId,
      required: true,
    },
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
  },
  { timestamps: true },
);

export const studentCollection = mongoose.model('students', studentSchema);
