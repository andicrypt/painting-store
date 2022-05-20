import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
    imports:[
        UserModule,
        PassportModule,
        JwtModule.register({
            // secret: `${process.env.JWT_KEY}`,
            secret: 'secretKey',
            signOptions: {expiresIn: '60s'},
        }),
    ],
    providers: [AuthService, JwtStrategy, LocalStrategy],
    exports: [AuthService],
})
export class AuthModule {}
