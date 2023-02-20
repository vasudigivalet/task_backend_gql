import mongoose from "mongoose";
import { ObjectId } from "mongodb";

interface classDoc {
  id: ObjectId;
  className: string;
  section: string;
  standard: string;
  timestamps: boolean;
}
const classSchema = new mongoose.Schema<classDoc>(
  {
    className: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: true
    },
  },
  { timestamps: true },
);

export const classCollection = mongoose.model('classroom', classSchema);
