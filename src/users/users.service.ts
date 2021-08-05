import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../shared/models/user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userModel: typeof User){}


    async findUserByUsername(username:string):Promise<User>{
        return await this.userModel.findOne({
            where:{
                username:username
            }
        })
    }

    async findUserById(id:number):Promise<User>{
        return await this.userModel.findOne({
            where:{
                id:id
            }
        })
    }
}
