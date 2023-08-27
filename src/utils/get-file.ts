import { UnauthorizedException } from '@nestjs/common';
import { RequestWithUser } from './interfaces/request-user';
import { randomUUID } from 'crypto';

export const getFile = (req: RequestWithUser) => {
  const user = req.user;
  if (!user) {
    throw new UnauthorizedException();
  }
  const { file } = req;
  file.originalname = randomUUID();
  return { user, file };
};
