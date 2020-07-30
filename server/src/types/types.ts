import { Database } from './db';

export interface Context {
  db: Database;
  user: JWTUser | null;
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

export type Role = 'ADMIN' | 'MANAGER' | 'BASIC';
