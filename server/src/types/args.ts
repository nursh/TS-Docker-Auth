import { Role } from './types';

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
