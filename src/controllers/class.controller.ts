import { ObjectId } from "mongodb";
import { classCollection } from "../database/model/class.model";

//create class
export const createclass = (parents: any, args: any) => {
  const classcollection = new classCollection(args.input);
  return classcollection.save();
};

// display class
export const displayClass = async () => {
  return await classCollection.find();
};

//Display class by ID
export const displayClassByID = async (parents: any, args: any) => {
  return await classCollection.findById(new ObjectId(args.id));
};

//Update class by ID
export const updateClass = async (parents: any, args: any) => {
  return await classCollection.findByIdAndUpdate(args.id, args.input, {
    new: true,
  });
};

//Delete class by ID
export const deleteClass = async (parents: any, args: any) => {
  return await classCollection.findByIdAndRemove(args.id);
};
