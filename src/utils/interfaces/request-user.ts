import { AuthUser } from '@supabase/supabase-js';
import { Request } from 'express';
import { FileDTO } from 'src/images/dtos/file.dto';

export class RequestWithUser extends Request {
  user: AuthUser;
  file?: FileDTO;
}
