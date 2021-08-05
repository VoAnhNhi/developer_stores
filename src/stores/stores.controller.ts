import { Controller, Get, UseGuards,Request, Post, Body, Put, Param, Delete } from '@nestjs/common';
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

    @UseGuards(JwtAuthGuard)
    @Post('')
    async createStore( @Body() createStore: any, @Request() req:any):Promise<any>{
        if (createStore.name == null || createStore.email == null) {
            return { message: 'Store name or Store email is not empty !!!' }
        }
        delete createStore.id
        return this.storeService.createStore(createStore,req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/:id')
    async updateStore( @Param('id') id: number, @Body() updateStoreDto: any, @Request() req:any):Promise<StoreDto>{
        return this.storeService.updateStore(id,updateStoreDto,req.user)
    }

    @UseGuards(JwtAuthGuard)
    @Delete('/:id')
    async deleteStore(@Param('id') id: number, @Request() req: any){
        await this.storeService.deleteStore(id,req.user)
        return {
            message: "delete success"
        }
    }
}
