import { teacherCollection } from '../model/teacher.model';

export class Teacher {
  //create Student
  createTeacher = (parents: any, args: any) => {
    try {
      console.log(args.input);
      const teachercollection = new teacherCollection(args.input);
      return teachercollection.save();
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };

  // display Student
  displayTeachers = async () => {
    try {
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
      console.warn('Something went Wrong', err);
    }
  };

  //Display Student by ID
  displayTeacherByID = async (parents: any, args: any) => {
    try {
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
      console.warn('Something went Wrong', err);
    }
  };

  //Update Student by ID
  updateTeacher = async (parents: any, args: any) => {
    try {
      return await teacherCollection.findByIdAndUpdate(args.id, args.input, {
        new: true,
      });
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };

  //Delete Student by ID
  deleteTeacher = async (parents: any, args: any) => {
    try {
      return await teacherCollection.findByIdAndRemove(args.id);
    } catch (err) {
      console.warn('Something went Wrong', err);
    }
  };
}
