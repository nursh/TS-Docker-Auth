import { Collection, ObjectId } from 'mongodb';
import { Role } from 'lib/types';

export interface DBUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface Database {
  users: Collection<DBUser>;
}
