import { Role } from './common-types';

export interface UserArgs {
  user: {
    name: string;
    email: string;
    password: string;
    role: Role;
  };
}

type Login = {
  name: string;
  password: string;
};

export interface JWTLoginArgs {
  login: Login;
}

type Code = {
  code: string | null;
};

export interface AuthLoginArgs {
  input: Code;
}
