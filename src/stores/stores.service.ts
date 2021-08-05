import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { map } from 'lodash';
import { UpdateStoreDto } from '../shared/dto/update-store.dto';
import { CreateStoreDto } from '../shared/dto/create-store.dto';
import { StoreDto } from '../shared/dto/store.dto';
import { Store } from '../shared/models/store.model';
import { ModelUtils } from '../shared/utils/model';

@Injectable()
export class StoresService {
    constructor(@InjectModel(Store) private readonly storeModel:typeof Store){}

    async getStores(user:any):Promise<StoreDto[]>{
        const stores:Store[] = await this.storeModel.findAll({
            where:{
               ownerId: user.userId
            }
        })
        return map(stores,(it)=>StoreDto.fromStore(it))
    }

    async createStore(createStoreDto:CreateStoreDto,user:any): Promise<StoreDto>{
        const store = CreateStoreDto.toStore(createStoreDto)
        store.ownerId = user.userId
        const createStore = await store.save()
        return StoreDto.fromStore(createStore)
    }

    async updateStore(id: number,updateStoreDto: UpdateStoreDto, user:any): Promise<StoreDto>{
       
        let store: Store = await this.storeModel.findOne({
            where:{
                id: id, ownerId: user.userId
            }
        })

        if( !store) throw new NotFoundException("Store not found")

       store = ModelUtils.updateModel(store, updateStoreDto)
       store.ownerId = user.userId
       store = await store.save()
       return StoreDto.fromStore(store)
    }

    async deleteStore(id: number, user:any){
        const store = await this.storeModel.findOne({
            where:{
                id:id, ownerId:user.userId
            }
        })

        if(!store) throw new NotFoundException("Store not found")

        await this.storeModel.destroy({
            where:{
                id:id
            }
        })
    }
}
