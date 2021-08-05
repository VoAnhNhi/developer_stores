import { Controller, Request, Get, UseGuards } from "@nestjs/common";
import { User } from "../shared/models/user.model";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller('user')
export class UserController {
    constructor(private readonly authService: AuthService){}

    @UseGuards(JwtAuthGuard)
    @Get('me')
    async getMe(@Request() req:any):Promise<User>{
        return this.authService.getMe(req.user)
    }
}