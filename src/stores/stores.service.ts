import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { map } from 'lodash';
import { StoreDto } from '../shared/dto/store.dto';
import { Store } from '../shared/models/store.model';

@Injectable()
export class StoresService {
    constructor(@InjectModel(Store) private readonly storeModel:typeof Store){}

    async getStores(user:any):Promise<StoreDto[]>{
        const stores:Store[] = await this.storeModel.findAll({})
        return map(stores,(it)=>StoreDto.fromStore(it))
    }
}
