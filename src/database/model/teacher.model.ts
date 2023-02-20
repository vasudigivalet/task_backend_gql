import mongoose from "mongoose";
import { ObjectId } from "mongodb";

interface teacherDoc {
  id: ObjectId;
  teacherName: string;
  classIds: number[];
  gender: string;
  email: string;
  dateofbirth: Date;
  address: string;
  timestamps: boolean;
}

const teacherSchema = new mongoose.Schema<teacherDoc>(
  {
    teacherName: {
      type: String,
      required: true,
    },
    classIds: Array<teacherDoc>,
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

export const teacherCollection = mongoose.model('teacher', teacherSchema);
