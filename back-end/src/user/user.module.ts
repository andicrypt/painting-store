import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AbilityModule } from 'src/ability/ability.module';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/users.schema';
import { JwtAuthGuard } from 'src/auth/strategy/jwt-auth.guard';

@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    AbilityModule,
  ],
  controllers: [UserController],
  providers: [UserService, JwtAuthGuard],
  exports: [UserService],
})
export class UserModule {}
