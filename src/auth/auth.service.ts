import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../shared/models/user.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService:UsersService,
        private readonly jwtService: JwtService
    ){}

    async validateUser(username:string,password:string):Promise<User>{
        const user = await this.userService.findUserByUsername(username)
        if(user && user.password === password){
            return user
        }
        return null
    }

    async login(user:any){
        var payload = {username:user.username,sub:user.id}

        return {
            token:this.jwtService.sign(payload)
        }
    }

    async getMe(user:any):Promise<User>{
        return this.userService.findUserById(user.userId)
    }
}
