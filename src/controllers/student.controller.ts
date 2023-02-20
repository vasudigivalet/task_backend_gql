import { ObjectId } from "mongodb";
import { studentCollection } from "../database/model/student.model";

//create Student
export const createstudent = (parents: any, args: any) => {
  const studentcollection = new studentCollection(args.input);
  return studentcollection.save();
};

// display Student
export const displayStudent = async () => {
  return await studentCollection.find();

};

//Display Student by ID
export const displayStudentByID = async (parents: any, args: any) => {
  return await studentCollection.findById(new ObjectId(args.id));
};

//Update Student by ID
export const updateStudent = async (parents: any, args: any) => {
  return await studentCollection.findByIdAndUpdate(args.id, args.input, {
    new: true,
  });
};

//Delete Student by ID
export const deleteStudent = async (parents: any, args: any) => {
  return await studentCollection.findByIdAndRemove(args.id);
};
