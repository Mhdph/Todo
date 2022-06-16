import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'firstName must be at least 3 characters long' })
  firstName: string;

  @IsString()
  @MinLength(3, { message: 'lastName must be at least 3 characters long' })
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
