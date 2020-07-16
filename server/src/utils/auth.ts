import { Request } from 'express';
import { JWTUser } from 'types';
import { verifyAccessToken } from 'utils/jwt';

export function getUser(req: Request) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  const user = verifyAccessToken(token);
  return user as JWTUser;
}
