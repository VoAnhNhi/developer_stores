import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import {secret} from '../shared/constants/secretKey'
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../shared/models/user.model';
import { UsersService } from '../users/users.service';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './user.controller';
@Module({
  imports:[UsersModule,
    PassportModule,
    JwtModule.register({
      secret:secret.secretKey,
      signOptions:{
        expiresIn:'1d'
      }
    }),
    SequelizeModule.forFeature([User])
  ],
  controllers: [AuthController, UserController],
  providers: [AuthService,UsersService,LocalStrategy,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
