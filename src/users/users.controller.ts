import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { request } from 'http';
import { ResultDto } from 'src/dto/results.dto';
import { UsersCreate } from './dto/users.dto';
import { Users } from './users.entity';
import { usersServices } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: usersServices) {}

  @Get('list')
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post('createUser')
  async createUser(@Body() data: UsersCreate): Promise<ResultDto> {
    return this.usersService.createUser(data);
  }

  @Get('getUser/:id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }
}
