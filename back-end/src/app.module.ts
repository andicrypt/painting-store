import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AbilityModule } from './ability/ability.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DB_URI, { useNewUrlParser: true }),
    UserModule,
    AbilityModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
