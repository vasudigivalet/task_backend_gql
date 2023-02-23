import { logger } from '../../utils/logger';
import { teacherCollection } from '../model/teacher.model';

export class Teacher {
  //create Student
  createTeacher = (parents: any, args: any) => {
    try {
      // console.log(args.input);
      logger.info("Create Teacher",args.input.name)
      const teachercollection = new teacherCollection(args.input);
      return teachercollection.save();
    } catch (err) {
      logger.error("something went wrong",err )
    }
  };

  // display Student
  displayTeachers = async () => {
    try {
      logger.info("Display Teacher Details")
      return await teacherCollection.aggregate([
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
  displayTeacherByID = async (parents: any, args: any) => {
    try {
      logger.debug("Display Teacher ID")
      await teacherCollection.aggregate([
        {
          $lookup: {
            from: 'classrooms',
            localField: 'classId',
            foreignField: '_id',
            as: 'class',
          },
        },
      ]);
      return await teacherCollection.findById(args.id);
    } catch (err) {
      logger.error("something went wrong",err )
    }
  };

  //Update Student by ID
  updateTeacher = async (parents: any, args: any) => {
    try {
      logger.info("Update Teacher with ID",args.id)
      return await teacherCollection.findByIdAndUpdate(args.id, args.input, {
        new: true,
      });
    } catch (err) {
      logger.error("something went wrong",err )
    }
  };

  //Delete Student by ID
  deleteTeacher = async (parents: any, args: any) => {
    try {
      logger.info("Deleted with id",args.id)
      return await teacherCollection.findByIdAndRemove(args.id);
    } catch (err) {
      logger.error("something went wrong",err )
    }
  };
}
