import { teacherCollection } from '../model/teacher.model';

export class Teacher {
  //create Student
  createTeacher = (parents: any, args: any) => {
    console.log(args.input);
    const teachercollection = new teacherCollection(args.input);
    return teachercollection.save();
  };

  // display Student
  displayTeachers = async () => {
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
  };

  //Display Student by ID
  displayTeacherByID = async (parents: any, args: any) => {
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
  };

  //Update Student by ID
  updateTeacher = async (parents: any, args: any) => {
    return await teacherCollection.findByIdAndUpdate(args.id, args.input, {
      new: true,
    });
  };

  //Delete Student by ID
  deleteTeacher = async (parents: any, args: any) => {
    return await teacherCollection.findByIdAndRemove(args.id);
  };
}
