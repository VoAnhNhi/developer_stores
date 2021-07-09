import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Store } from '../shared/models/store.model';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';

@Module({
  imports:[SequelizeModule.forFeature([Store])],
  controllers: [StoresController],
  providers: [StoresService]
})
export class StoresModule {}
