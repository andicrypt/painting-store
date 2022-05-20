import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "./constants";
import * as dotenv from 'dotenv';
dotenv.config();


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        console.log('haha', process.env.JWT_KEY)
        console.log('kaka', jwtConstants.secret)
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            // secretOrKey: `${process.env.JWT_KEY}`,
            secretOrKey: "secretKey",
        });
    }

    async validate(payload: any) {
        return {userId: payload.sub, username: payload.username};
    }
}