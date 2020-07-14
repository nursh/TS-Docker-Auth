import { MongoClient } from 'mongodb';
import { Database } from 'types';

const url = `mongodb://localhost:27017/ts-docker`;

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db('ts-docker');
  return {
    users: db.collection('users')
  };
};
