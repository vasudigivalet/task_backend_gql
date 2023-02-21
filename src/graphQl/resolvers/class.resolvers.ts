import { Class } from "../../database/modules/class.modules";

// Resolvers define how to fetch the types defined in your schema.
let classDetails = new Class();
export const resolvers = {
  Query: {
    //class Query
    classes: classDetails.displayClass,
    class: classDetails.displayClassByID,
  },

  Mutation: {
    //class Mutation
    createClass: classDetails.createclass,
    updateClass: classDetails.updateClass,
    deleteClass: classDetails.deleteClass,
  },
};
