import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import {secret} from '../shared/constants/secretKey'
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: secret.secretKey
        })
    }

    async validate(payload:any){
        const userId = payload.sub
        return {username:payload.username,userId}
    }
}