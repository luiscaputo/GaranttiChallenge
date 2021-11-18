import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ResultDto } from 'src/dto/results.dto';
import { Repository } from 'typeorm';
import { UsersCreate } from './dto/users.dto';
import { Users } from './users.entity';

@Injectable()
export class usersServices {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  async createUser(data: UsersCreate): Promise<ResultDto> {
    const users = new Users();
    users.email = data.email;
    users.username = data.username;
    users.password = bcrypt.hashSync(data.password, 8);

    return this.usersRepository
      .save(users)
      .then((result) => {
        return <ResultDto>{
          status: true,
          message: 'User Registred with Success.',
        };
      })
      .catch((error) => {
        return <ResultDto>{
          status: false,
          message: 'Error: Try Again.',
        };
      });
  }
  async findOne(id: number): Promise<Users | undefined> {
    return this.usersRepository.findOne(id);
  }
}
