import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { usersProviders } from './users.providers';
import { usersServices } from './users.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => Users)],
  controllers: [UsersController],
  providers: [...usersProviders, usersServices],
})
export class UsersModule {}
