import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleGuard } from 'src/auth/guard/role.guard';
import { Constans } from './utils/constans';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signUp')
  create(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @UseGuards(new RoleGuard(Constans.Roles.ADMIN_ROLE))
  findAll(@Req() req) {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findUserById(id);
  }

  @Delete(':id')
  @UseGuards(new RoleGuard(Constans.Roles.ADMIN_ROLE))
  remove(@Param('id') id: string, @Req() req) {
    return this.userService.remove(+id);
  }
}
