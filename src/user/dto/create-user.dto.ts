import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3, { message: 'firstName must be at least 3 characters long' })
  firstName: string;

  @ApiProperty()
  @IsString()
  @MinLength(3, { message: 'lastName must be at least 3 characters long' })
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
