import GraphQLUpload from 'graphql-upload/GraphQLUpload.mjs';
import { IResolvers } from '@graphql-tools/utils';
import { createReadStream, createWriteStream } from 'fs';
import { join, parse } from 'path';

const BASE_URL = 'http://localhost:4000/';

export const resolvers: IResolvers = {
  Upload: GraphQLUpload,
  Query: {
    //student Query
    info: () => 'Hello I am Image Resolver Methodss',
  },

  Mutation: {
    //Student Mutation
    imageUploader: async (parent: any, { file }) => {
      let { filename, createReadStream } = await file;
      let stream = createReadStream();
      let { ext, name } = parse(filename);
      name = name.replace(/([^a-z0-9]+)/gi, '-').replace(' ', '_');
      let serverFile = join(
        __dirname,
        `../../uploads/${name}-${Date.now()}${ext}`,
      );
      let writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);
      serverFile = `${BASE_URL}${serverFile.split('uploads')[1]}`;

      return serverFile;
    },
  },
};
