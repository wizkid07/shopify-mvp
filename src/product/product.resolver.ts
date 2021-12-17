import { Args, Query, Resolver } from '@nestjs/graphql';
import { MerchantService } from 'src/merchant/merchant.service';
import { MapperService } from 'src/utils/helper';
import { ProductFetchInput } from './dto/product.input';
import { Product } from './models/product.model';
import { ProductService } from './product.service';
import * as ShopifyProductMapper from '../mapper/shopify/shopify.json'
import * as WooCommerceProductMapper from '../mapper/woocommerce/woocommerce.json'
@Resolver(of=>Product)
export class ProductResolver {
    constructor(
        private productService:ProductService,
        private merchantService:MerchantService,
        private mapperService:MapperService
    ){}
    @Query(returns=>Product,{nullable:true})
    async singleProduct(@Args('product')productFetchInput:ProductFetchInput):Promise<Product|null>{
        
        const{appid,productid} = productFetchInput;
        const {merchant_domain,access_token_key,access_token_secret,platform} = await this.merchantService.getMerchantByAppid(appid);
        if(platform === "SHOPIFY"){

            const shopifyProduct:any = await this.productService.fetchSingleProduct(merchant_domain,productid,access_token_key);
            if(!shopifyProduct) return null;
            const nxtProduct = this.mapperService.jsonMapper(shopifyProduct.product,ShopifyProductMapper)
            return nxtProduct;

        }else if (platform === "WOOCOMMERCE"){

            const wooProduct:any = await this.productService.fetchWooProduct(merchant_domain,productid,access_token_key,access_token_secret)
            if(!wooProduct) return ;
            const nxtProduct = this.mapperService.jsonMapper(wooProduct,WooCommerceProductMapper)
            return nxtProduct;
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
