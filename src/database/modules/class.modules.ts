import { ObjectId } from "mongodb";
import { classCollection } from "../model/class.model";

export class Class {
  //create class
  createclass = (parents: any, args: any) => {
    const classcollection = new classCollection(args.input);
    return classcollection.save();
  };

  // display class
  displayClass = async () => {
    return await classCollection.find();
  };

  //Display class by ID
  displayClassByID = async (parents: any, args: any) => {
    return await classCollection.findById(new ObjectId(args.id));
  };

  //Update class by ID
  updateClass = async (parents: any, args: any) => {
    return await classCollection.findByIdAndUpdate(args.id, args.input, {
      new: true,
    });
  };

  //Delete class by ID
  deleteClass = async (parents: any, args: any) => {
    return await classCollection.findByIdAndRemove(args.id);
  };
}
