import { Injectable } from '@nestjs/common';
import { User, UserDocument, UserRole } from 'src/schemas/users.schema';
// import { CreateUserDto } from './createUserDto/create-user.createUserDto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { UpdateUserDto } from './createUserDto/update-user.createUserDto';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import * as bcrypt from 'bcrypt';


const saltOrRounds = parseInt(process.env.SALTORROUNDS);

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>){}
  
  async create(createUserDto: CreateUserDto): Promise<User> {
    const hash: string = await bcrypt.hash(createUserDto.password, saltOrRounds);
    createUserDto = {
      ...createUserDto,
      password: hash
    }
    const createUser = new this.userModel(createUserDto);
    return createUser.save();
  }

  async findAllUser(role: UserRole): Promise<User[] | undefined> {
    return await this.userModel.find({role}).exec();
  }

  async findAll(): Promise<User[] | undefined> {
    return this.userModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({ username});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
