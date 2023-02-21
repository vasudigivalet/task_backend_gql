import { studentCollection } from "../model/student.model";

export class Student {
  //create Student
  createstudent = (parents: any, args: any) => {
    const studentcollection = new studentCollection(args.input);
    return studentcollection.save();
  };

  // display Student
  displayStudent = async () => {
    return await studentCollection.aggregate([
      {
        $lookup: {
          from: 'classrooms',
          localField: 'classId',
          foreignField: '_id',
          as: 'class',
        },
      },
    ]);
  };

  //Display Student by ID
  displayStudentByID = async (parents: any, args: any) => {
    await studentCollection.aggregate([
      {
        $lookup: {
          from: 'classrooms',
          localField: 'classId',
          foreignField: '_id',
          as: 'class',
        },
      },
    ]);
    return await studentCollection.findById(args.id);
  };

  //Update Student by ID
  updateStudent = async (parents: any, args: any) => {
    return await studentCollection.findByIdAndUpdate(args.id, args.input, {
      new: true,
    });
  };

  //Delete Student by ID
  deleteStudent = async (parents: any, args: any) => {
    return await studentCollection.findByIdAndRemove(args.id);
  };
}
