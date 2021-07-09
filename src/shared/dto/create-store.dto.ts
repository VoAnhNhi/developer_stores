import {IsNotEmpty} from 'class-validator'
import { Store } from '../models/store.model'
import { DtoUtils } from '../utils/dto'
export class CreateStoreDto {
    @IsNotEmpty({message:'Username is not empty !!!'})
    name:string = null

    description:string  = null

    @IsNotEmpty({message:'Email is not empty !!!'})
    email:string = null

    address:string = null

    phone:string = null

    ownerId:number = null

    static fromStore(store:Store):CreateStoreDto{
        return DtoUtils.transformDtoToModel(store,CreateStoreDto) as CreateStoreDto
    }

    static toStore(createStoreDto:CreateStoreDto):Store{
        return DtoUtils.transformModelToDto(createStoreDto,Store) as Store
    }
}