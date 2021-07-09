import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { StoreDto } from '../shared/dto/store.dto';
import { StoresService } from './stores.service';

@Controller('stores')
export class StoresController {
    constructor(private readonly storeService:StoresService){}

    @UseGuards(JwtAuthGuard)
    @Get('')
    async getStores(@Request() req:any):Promise<StoreDto[]>{
        return this.storeService.getStores(req.user)
    }
}
