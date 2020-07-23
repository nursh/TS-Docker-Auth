import jwt from 'jsonwebtoken';
import { Role } from 'types';
import { assignPermissions } from './roles-permissions';

export const generateAccessToken = (payload: string | object) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN as string, {
    expiresIn: '7 days'
  });
};

export const generateRefreshToken = (payload: string | object) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN as string);
};

export const verifyAccessToken = (token: string) => {
  return jwt.verify(token, process.env.ACCESS_TOKEN as string);
};

export const verifyRefreshToken = (token: string) => {
  return jwt.verify(token, process.env.REFRESH_TOKEN as string);
};

export const createPayload = (id: string, role: Role) => {
  return {
    user: {
      id,
      role,
      permissions: assignPermissions(role)
    }
  };
};
