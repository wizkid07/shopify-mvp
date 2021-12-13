
import { Module } from "@nestjs/common"
import { PrismaService } from "src/prisma.service";
import { MerchantResolver } from "./merchant.resolver";
import { MerchantService } from "./merchant.service";

@Module({
	providers: [MerchantService,MerchantResolver,PrismaService]
})
export class MerchantModule {}