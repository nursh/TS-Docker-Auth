import { Request, Response } from 'express';
import { Database } from './db-types';

export interface GithubUser {
  id: number;
  name: string;
  avatar_url: string;
}

export interface JWTUser {
  id: string;
  name: string;
  permissions: string[];
}

export interface Book {
  name: string;
  title: string;
}

export interface Context {
  db: Database;
  req: Request;
  res: Response;
  user: JWTUser | null;
}

export interface FacebookToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface FacebookUser {
  id: string;
  name: string;
  email: string;
}

export interface Options {
  token: string;
  ctx: Context;
}

export interface OptionsWithCode extends Options {
  code: string;
}

export type Role = 'ADMIN' | 'MANAGER' | 'BASIC';
