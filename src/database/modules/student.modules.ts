import { studentCollection } from '../model/student.model';

// import { fileData } from "../../graphQl/resolvers/image.resolvers";

export class Student {
  //create Student
  createstudent = (parents: any, args: any) => {
    console.log(
      '🚀 ~ file: student.modules.ts:7 ~ Student ~ args:',
      args.input.profilePhoto,
    );
    try {
      const studentcollection = new studentCollection(args.input);
      return studentcollection.save();
    } catch (err) {
      console.log('🚀 ~ file: student.modules.ts:17 ~ Student ~ err:', err);
    }
  };
  // display Student
  displayStudent = async () => {
    try {
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
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };

  //Display Student by ID
  displayStudentByID = async (parents: any, args: any) => {
    try {
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
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };

  //Update Student by ID
  updateStudent = async (parents: any, args: any) => {
    try {
      return await studentCollection.findByIdAndUpdate(args.id, args.input, {
        new: true,
      });
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };

  //Delete Student by ID
  deleteStudent = async (parents: any, args: any) => {
    try {
      return await studentCollection.findByIdAndRemove(args.id);
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };
}
