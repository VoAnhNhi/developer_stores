import { Store } from "../models/store.model";
import { DtoUtils } from "../utils/dto";
import { CreateStoreDto } from "./create-store.dto";

export class StoreDto extends CreateStoreDto{
    id:number = null


    static fromStore(store:Store):StoreDto{
        return DtoUtils.transformModelToDto(store,StoreDto) as StoreDto
    }

    static toStore(storeDto:StoreDto):Store{
        return DtoUtils.transformDtoToModel(storeDto,Store) as Store
    }
}