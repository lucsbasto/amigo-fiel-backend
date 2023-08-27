import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { AuthError } from '@supabase/supabase-js';

@Catch(AuthError)
export class SupabaseExceptionFilter implements ExceptionFilter {
  catch(exception: AuthError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    console.error({
      statusCode: exception.status,
      message: exception.message,
      stack: exception.stack,
    });
    return response.status(exception.status).json({
      statusCode: exception.status,
      message: exception.message,
    });
  }
}
