import { Student } from '../../database/modules/student.modules';

const students = new Student();
export const resolvers = {
  Query: {
    //student Query
    students: students.displayStudent,
    student: students.displayStudentByID,
  },

  Mutation: {
    //Student Mutation
    createStudent: students.createstudent,
    updateStudent: students.updateStudent,
    deleteStudent: students.deleteStudent,
  },
};
