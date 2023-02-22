import { ObjectId } from "mongodb";
import { classCollection } from "../model/class.model";

export class Class {
  //create class
  createclass = (parents: any, args: any) => {
    try {
      const classcollection = new classCollection(args.input);
      return classcollection.save();
    } catch (err) {
      console.warn('something went wrong', err);
    }
  };

  // display class
  displayClass = async () => {
    try {
      return await classCollection.find();
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };
  // displayClass = () => {
  //   return classCollection.find();
  // };

  //Display class by ID
  displayClassByID = async (parents: any, args: any) => {
    try {
      return await classCollection.findById(new ObjectId(args.id));
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };

  //Update class by ID
  updateClass = async (parents: any, args: any) => {
    try {
      return await classCollection.findByIdAndUpdate(args.id, args.input, {
        new: true,
      });
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };

  //Delete class by ID
  deleteClass = async (parents: any, args: any) => {
    try {
      return await classCollection.findByIdAndRemove(args.id);
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };
}
