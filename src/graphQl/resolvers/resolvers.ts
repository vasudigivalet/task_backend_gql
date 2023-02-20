import { createstudent } from "../../controllers/student.controller";

import {
  createclass,
  displayClass,
  displayClassByID,
  deleteClass,
  updateClass,
} from '../../controllers/class.controller';

// Resolvers define how to fetch the types defined in your schema.
 export const resolvers = {

  
  Query: {
    //class Query
    classes: displayClass,
    class: displayClassByID,

    //student Query
  
  },

  Mutation: {
    //class Mutation
    createClass: createclass,
    updateClass: updateClass,
    deleteClass: deleteClass,

    //Student Mutation
    createStudent:createstudent,
  },
};
