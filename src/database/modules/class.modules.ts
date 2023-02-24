import { ObjectId } from "mongodb";
import { logger } from "../../utils/logger";
import { classCollection } from "../model/class.model";

export class Class {
  //create class
  createclass = (parents: any, args: any) => {
    try {
      logger.info('A Class is created',args.input);
      const classcollection = new classCollection(args.input);
      return classcollection.save();
    } catch (err) {
      console.warn('something went wrong', err);
      logger.error('something bad happend', err);
    }
  };

  // display class
  displayClass = async () => {
    try {
      logger.info('Class Details displayed');
      return await classCollection.find();
    } catch (err) {
      console.warn('Something went Wrong', err);
      logger.error('Something went Wrong', err);
    }
  };
  // displayClass = () => {
  //   return classCollection.find();
  // };

  //Display class by ID
  displayClassByID = async (parents: any, args: any) => {
    try {
      logger.info('Successfully class of id:', args._id);
      return await classCollection.findById(new ObjectId(args.id));
    } catch (err) {
      logger.error('something went wrong', err);
      console.warn('Something went Wrong', err);
    }
  };

  //Update class by ID
  updateClass = async (parents: any, args: any) => {
    try {
      logger.info('Successfully Update data from class',args._id);
      return await classCollection.findByIdAndUpdate(args._id, args.input, {
        new: true,
      });
    } catch (err) {
      logger.error('something went wrong', err);
      console.warn('Something went Wrong', err);
    }
  };

  //Delete class by ID
  deleteClass = async (parents: any, args: any) => {
    try {
      logger.info('Successfully Deleted data from class',args._id);
      return await classCollection.findByIdAndRemove(args._id);
    } catch (err) {
      logger.error('something went wrong', err);
    }
  };
}
