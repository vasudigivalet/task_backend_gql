import { IResolvers } from "@graphql-tools/utils";
import { createWriteStream } from "fs";
import { join, parse } from "path";
import { logger } from "../../utils/logger";

const { finished } = require('stream/promises');
const GraphQLUpload = require('graphql-upload');

const BASE_URL = 'http://localhost:4000/';
let fileData: String;
export const resolvers: IResolvers = {
  Upload: GraphQLUpload,

  Query: {
    //Image Query
    info: () => 'Hello I am Image Resolver Methods',
  },

  Mutation: {
    profileUploader: async (parent, { file }) => {
      const { createReadStream, filename } = await file.promise;
      
      const stream = createReadStream();

      let { ext, name } = parse(filename);
      name = name.replace(/([^a-z0-9]+)/gi, '-').replace(' ', '_');
      let serverFile = join(__dirname, `../../uploads/${Date.now()}${ext}`);
      let writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);
      serverFile = `${serverFile.split('uploads/')[1]}`;
      fileData = serverFile;
      logger.info("Successfully File Upload")
      await finished(writeStream);
      return `${BASE_URL}uploads/${fileData}`;
    },
  },

  studentDetails: {
    profilePhoto: () => {
      return fileData;
    },
  },

  teacherDetails: {
    profilePhoto: () => {
      return fileData;
    },
  },
};
