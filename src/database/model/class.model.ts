import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';

interface classDoc {
  id: ObjectId;
  name: string;
  section: string;
  standard: string;
  timestamps: boolean;
}
const classSchema = new mongoose.Schema<classDoc>(
  {
    name: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const classCollection = mongoose.model('classroom', classSchema);
