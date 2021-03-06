import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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

  findUserById(id: number) {
    return this.UserRepository.findOneByOrFail({ id: id });
  }

  findAll() {
    return this.UserRepository.find();
  }
  findUserByEmail(email: string) {
    return this.UserRepository.findOne({ where: { email: email } });
  }

  remove(id: number) {
    return this.UserRepository.delete(id);
  }
}
