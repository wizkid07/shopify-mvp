import { ProductResolver } from "./product.resolver"
import { ProductService } from "./product.service"
import { Module } from "@nestjs/common"
import { MapperService, RequestHelpers } from "src/utils/helper"
import { MerchantService } from "src/merchant/merchant.service"
import { PrismaService } from "src/prisma.service"

@Module({
	providers: [ProductResolver, ProductService,RequestHelpers,MerchantService,PrismaService,MapperService]
})
export class ProductModule {}