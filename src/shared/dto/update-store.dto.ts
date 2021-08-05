import { Store } from "../models/store.model"
import { DtoUtils } from "../utils/dto"

export class UpdateStoreDto {
    name: string = null

    description: string = null

    email: string = null

    address: string = null

    phone: string = null

    static fromStore( store: Store): UpdateStoreDto{
        return DtoUtils.transformModelToDto(store, UpdateStoreDto) as UpdateStoreDto
    }

    static toStore( updateStoreDto: UpdateStoreDto): Store {
        return DtoUtils.transformDtoToModel( updateStoreDto, Store) as Store
    }
}