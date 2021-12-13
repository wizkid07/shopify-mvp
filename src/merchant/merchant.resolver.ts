import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { MerchantCreateInput } from './dto/merchant.input';
import { MerchantService } from './merchant.service';
import { Merchant } from './models/merchant.model';
import { DeleteOutput} from './dto/delete.output'

@Resolver(of=>Merchant)
export class MerchantResolver {
    constructor(private readonly merchantService:MerchantService){}

    @Query(returns=>[Merchant])
    async displayMerchants():Promise<Merchant[]|null>{
        return this.merchantService.getAllMerchants();
    }

    @Mutation(returns=>Merchant)
    async registerMerchant(@Args("merchant") merchantCreateInput:MerchantCreateInput):Promise<Merchant>{
        return this.merchantService.registerMerchant(merchantCreateInput);
    }

    @Mutation(returns=>DeleteOutput)
    async clearMerchants():Promise<DeleteOutput>{
        return this.merchantService.deleteAllMerchants();
    }

}
