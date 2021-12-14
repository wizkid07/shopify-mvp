import { Args, Query, Resolver } from '@nestjs/graphql';
import { MerchantService } from 'src/merchant/merchant.service';
import { ProductFetchInput } from './dto/product.input';
import { Product } from './models/product.model';
import { ProductService } from './product.service';

@Resolver(of=>Product)
export class ProductResolver {
    constructor(private productService:ProductService,private merchantService:MerchantService){}
    @Query(returns=>Product)
    async singleProduct(@Args('product')productFetchInput:ProductFetchInput):Promise<Product|null>{
        const{appid,productid} = productFetchInput;

        const {merchant_domain,accessKeyToken} = await this.merchantService.getMerchantByAppid(appid);

        const shopifyProduct:any = await this.productService.fetchSingleProduct(merchant_domain,productid,accessKeyToken);

        const {id,title,body_html,vendor,product_type,created_at,handle,updated_at,published_at,template_suffix,status,published_scope,tags,admin_graphql_api_id} = shopifyProduct.product;

        return {id,title,body_html,vendor,product_type,created_at,handle,updated_at,published_at,template_suffix,status,published_scope,tags,admin_graphql_api_id};

    }

    @Query(returns=>[Product])
    async multipleProducts():Promise<Product[]|null>{
        const shopifyProducts = await this.productService.fetchMultipleProducts();
        
        return [{
            "id": 6977062502583,
            "title": "old Watch 2",
            "body_html": "",
            "vendor": "guhan-vjro",
            "product_type": "",
            "created_at": "2021-09-09T15:54:13+05:30",
            "handle": "new-watch",
            "updated_at": "2021-10-04T12:00:24+05:30",
            "published_at": "2021-09-09T15:54:15+05:30",
            "admin_graphql_api_id": "gid://shopify/Product/6977062502583",
            "tags": "",
            "status": "active",
            "template_suffix": "",
            "published_scope": "web"
        }]
    }
}
