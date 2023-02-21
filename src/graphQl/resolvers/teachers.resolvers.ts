import { Teacher } from "../../database/modules/teacher.modules";

let teacher = new Teacher();
export const resolvers = {
  Query: {
    //Teacher Query
    teachers: teacher.displayTeachers,
    teacher: teacher.displayTeacherByID,
  },

  Mutation: {
    //Teacher Mutation
    createTeachers: teacher.createTeacher,
    updateTeachers: teacher.updateTeacher,
    deleteTeachers: teacher.deleteTeacher,
  },
};
