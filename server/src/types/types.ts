import { Request, Response } from 'express';
import { Collection, ObjectId } from 'mongodb';

export interface Context {
  req: Request;
  res: Response;
  db: Database;
  user: JWTUser | null;
}

export interface JWTUser {
  name: string;
}

export interface Book {
  name: string;
  title: string;
}

export interface User {
  _id: ObjectId;
  name: string;
  refreshToken?: string;
}

export interface Database {
  users: Collection<User>;
}
