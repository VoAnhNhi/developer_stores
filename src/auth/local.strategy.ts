import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly authService:AuthService){
        super()
    }

    async validate(username:string,password:string):Promise<any>{
        const auth = await this.authService.validateUser(username,password)

        if(!auth){
            throw new UnauthorizedException("Username or password is not correct.Please try again !!!")
        }

        return auth
    }
}