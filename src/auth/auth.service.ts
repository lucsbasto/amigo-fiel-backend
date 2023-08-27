import { Injectable } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';
import { UsersService } from 'src/users/users.service';
import { UserResponseDto } from 'src/users/dtos/user-response.dto';
import { Supabase } from 'src/utils/supabase';
import { AuthUser } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(
    private readonly supabase: Supabase,
    private readonly userService: UsersService,
  ) {}

  async loginWithEmailAndPassword(input: SignInDto): Promise<UserResponseDto> {
    const {
      data: { user, session },
      error,
    } = await this.supabase.getClient().auth.signInWithPassword(input);
    if (error) {
      throw error;
    }
    const response = await this.userService.findById(user.id);
    return { accessToken: session.access_token, ...response };
  }

  async getLoggedUser(loggedUser: AuthUser) {
    try {
      if (!loggedUser) {
        return null;
      }
      const user = await this.userService.findById(loggedUser.id);
      return user;
    } catch (error) {
      console.error(error);
    }
  }
}
