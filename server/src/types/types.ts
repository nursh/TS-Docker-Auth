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

export interface DBUser {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
}

export interface DBUserDetail {
  _id: ObjectId;
  user_id: string;
  role: Role;
  refreshToken?: string;
}

export type Role = 'ADMIN' | 'MANAGER' | 'BASIC';

export interface UserArgs {
  name: string;
  email: string;
  password: string;
  role: Role;
}

export interface LoginArgs {
  name: string;
  password: string;
}

export interface Database {
  users: Collection<DBUser>;
  userDetails: Collection<DBUserDetail>;
}
