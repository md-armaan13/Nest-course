import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

// these are decorators
@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
