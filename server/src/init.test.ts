import { MongoClient, Db } from 'mongodb';

describe('Testing Mongodb', () => {
  let connection: MongoClient;
  let db: Db;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    db = await connection.db();
  });

  afterAll(async () => {
    await connection.close();
  });

  it('Plays games', async () => {
    expect(2).toBe(2);
    await db.collection('users').findOne({ name: 'John' });
  });
});
