import { logger } from '../../utils/logger';
import { studentCollection } from '../model/student.model';

// import { fileData } from "../../graphQl/resolvers/image.resolvers";

export class Student {
  //create Student
  createstudent = (parents: any, args:any) => {
    console.log(
      '🚀 ~ file: student.modules.ts:7 ~ Student ~ args:',
      args.input.profilePhoto,
    );
    try {
      logger.info("Created Student")
      const studentcollection = new studentCollection(args.input);
      return studentcollection.save();
    } catch (err) {
      logger.error('🚀 ~ file: student.modules.ts:17 ~ Student ~ err:',err )
    }
  };
  // display Student
  displayStudent = async () => {
    try {
      logger.info("display Student Details")
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
      logger.error("something went wrong",err )
     
    }
  };

  //Display Student by ID
  displayStudentByID = async (parents: any, args: any) => {
    try {
      logger.debug("Display have to debug")
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
      logger.error("something went wrong",err )
  
    }
  };

  //Update Student by ID
  updateStudent = async (parents: any, args: any) => {
    try {
      logger.info("Update Student Successfully")
      return await studentCollection.findByIdAndUpdate(args.id, args.input, {
        new: true,
      });
    } catch (err) {
      logger.error("something went wrong",err )
   
    }
  };

  //Delete Student by ID
  deleteStudent = async (parents: any, args: any) => {
    try {
      logger.info("Delete Student Successfully")
      return await studentCollection.findByIdAndRemove(args.id);
    } catch (err) {
      logger.error("something went wrong",err )
    }
  };
}
