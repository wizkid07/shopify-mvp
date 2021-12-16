import { Args, Query, Resolver } from '@nestjs/graphql';
import { MerchantService } from 'src/merchant/merchant.service';
import { ProductFetchInput } from './dto/product.input';
import { Product } from './models/product.model';
import { ProductService } from './product.service';

@Resolver(of=>Product)
export class ProductResolver {
    constructor(private productService:ProductService,private merchantService:MerchantService){}
    @Query(returns=>Product,{nullable:true})
    async singleProduct(@Args('product')productFetchInput:ProductFetchInput):Promise<Product|null>{
        const{appid,productid} = productFetchInput;

        const {merchant_domain,access_token_key,access_token_secret,platform} = await this.merchantService.getMerchantByAppid(appid);

        if(platform === "SHOPIFY"){

            const shopifyProduct:any = await this.productService.fetchSingleProduct(merchant_domain,productid,access_token_key);
            if(!shopifyProduct) return null;
            const {id,title,body_html,vendor,product_type,created_at,handle,updated_at,published_at,template_suffix,status,published_scope,tags,admin_graphql_api_id} = shopifyProduct.product;
            return {id,title,body_html,vendor,product_type,created_at,handle,updated_at,published_at,template_suffix,status,published_scope,tags,admin_graphql_api_id};

        }else if (platform === "WOOCOMMERCE"){

            const wooProduct:any = await this.productService.fetchWooProduct(merchant_domain,productid,access_token_key,access_token_secret)
            if(!wooProduct) return ;
            const {id,name:title,slug:handle,date_created:created_at,date_modified:updated_at,description:body_html,status} = wooProduct
            return {id,title,body_html,vendor:null,product_type:null,created_at,handle,updated_at,published_at:null,template_suffix:null,status,published_scope:null,tags:null,admin_graphql_api_id:null}
        }
    }

    @Query(returns=>[Product])
    async multipleProducts():Promise<Product[]|null>{
        // const shopifyProducts = await this.productService.fetchMultipleProducts();
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
