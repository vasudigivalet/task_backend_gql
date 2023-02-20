import mongoose from "mongoose";
import { ObjectId } from "mongodb";

interface studentDoc {
  id: ObjectId;
  studentName: string;
  profilePhoto: string;
  classId: ObjectId;
  gender: string;
  email: string;
  dateofbirth: Date;
  address: string;
  timestamps: boolean;
}

const studentSchema = new mongoose.Schema<studentDoc>(
  {
    studentName: {
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
    dateofbirth: {
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
