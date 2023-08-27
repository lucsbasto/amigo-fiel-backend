import {
  Controller,
  Post,
  Body,
  Get,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dtos/sign-in.dto';
import { Public } from 'src/utils/decorators/public.decorator';
import { SupabaseGuard } from 'src/utils/supabase';
import { SignUpDto } from './dtos/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() input: SignInDto) {
    return this.authService.loginWithEmailAndPassword(input);
  }

  @Public()
  @Post('register')
  async register(@Body() input: SignUpDto) {
    return this.authService.signUp(input);
  }

  @UseGuards(SupabaseGuard)
  @Get('logged')
  async getLoggedUser(@Request() req: any) {
    return this.authService.getLoggedUser(req.user);
  }
}
