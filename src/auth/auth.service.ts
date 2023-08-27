import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dtos/sign-in.dto';
import { UsersService } from 'src/users/users.service';
import { UserResponseDto } from 'src/users/dtos/user-response.dto';
import { Supabase } from 'src/utils/supabase';
import { AuthUser } from '@supabase/supabase-js';
import { SignUpDto } from './dtos/sign-up.dto';
import { randomUUID } from 'crypto';

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
    if (!loggedUser) {
      return null;
    }
    const user = await this.userService.findById(loggedUser.id);
    return user;
  }

  async signUp(input: SignUpDto): Promise<UserResponseDto> {
    const { email, password, fullName, phoneNumber } = input;
    const [firstName, lastName] = fullName.split(' ');
    const {
      data: { user, session },
      error,
    } = await this.supabase.getClient().auth.signUp({ email, password });
    if (error) {
      throw error;
    }
    const newUser = await this.userService.create({
      id: user.id,
      email,
      firstName,
      lastName,
      phoneNumber,
      fullName,
    });
    return { ...newUser, accessToken: session.access_token };
  }
}
