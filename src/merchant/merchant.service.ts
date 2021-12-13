import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { MerchantCreateInput } from './dto/merchant.input';
import { Merchant } from './models/merchant.model';

@Injectable()
export class MerchantService {
    constructor(private readonly prisma:PrismaService){}

    async registerMerchant(data:MerchantCreateInput):Promise<Merchant|null>{
        return this.prisma.merchant.create({data});
    }

    async getAllMerchants():Promise<Merchant[]|null>{
        return this.prisma.merchant.findMany();
    }

    async getMerchantByAppid(appid:number):Promise<Merchant|null>{
        return this.prisma.merchant.findUnique({
            where:{
                merchant_appid:appid
            }
        })
    }

    async deleteAllMerchants():Promise<{count:number}>{
        return this.prisma.merchant.deleteMany({});
    }
}
