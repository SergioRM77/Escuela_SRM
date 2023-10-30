import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { JwtPayload } from '../interfaces/jwt-payload';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private authService: AuthService
  ){}
  async canActivate( context: ExecutionContext): Promise<boolean> {
    // consulta
    const request = context.switchToHttp().getRequest();
    // recupera el token de la consulta
    const token = this.extractTokenFromHeader(request);
    // hay token¿?
    if (!token) {
      throw new UnauthorizedException('No hay token en la autorización');
    }

    try {
      
      // verifica si el token es correcto, si no falla
      const payload = await this.jwtService.verifyAsync<JwtPayload>(
        token, { secret: process.env.JWT_SEED }
      );
  
      const user = await this.authService.findUserById( payload.id);
      if(!user) throw new UnauthorizedException('Usuario no existe');
      if(!user.isActive) throw new UnauthorizedException('Usuario no está activo');
  
      // Si retornamos el id del usuario podemos recuperar el usuario
      request['user'] = user;
    } catch (error) {
      throw new UnauthorizedException()
    }

    console.log({token})

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
