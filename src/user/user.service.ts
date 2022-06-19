import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repo/user.respository';
import { Constans } from './utils/constans';

@Injectable()
export class UserService {
  constructor(private UserRepository: UserRepository) {}

  create(createUserDto: CreateUserDto) {
    let user: User = new User();
    user.email = createUserDto.email;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.password = createUserDto.password;
    user.role = Constans.Roles.NORMAL_ROLE;
    return this.UserRepository.save(user);
  }

  findAll() {
    return this.UserRepository.find();
  }

  remove(id: number) {
    return this.UserRepository.delete(id);
  }
}
