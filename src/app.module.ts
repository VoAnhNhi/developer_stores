import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StoresModule } from './stores/stores.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forRoot({
    username:'postgres',
    password:'123456',
    port:5432,
    host:'127.0.0.1',
    database:'developer_stores',
    dialect:'postgres',
    autoLoadModels:true,
    synchronize:false,
    models:[]
  }),AuthModule, UsersModule, StoresModule],
  providers: [AppService],
})
export class AppModule {}
