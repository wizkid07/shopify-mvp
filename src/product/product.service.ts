import { Injectable } from '@nestjs/common';
import axios from 'axios'
import { RequestHelpers } from 'src/utils/helper';

@Injectable()
export class ProductService {
    constructor(private requestHelper:RequestHelpers) {}
    
  async fetchSingleProduct(merchant_domain:string,productid:number,accessKeyToken:string){
    let options = {
        url:`https://${merchant_domain}/admin/api/2020-07/products/${productid}.json`,
        config:{
            headers:{
                'X-Shopify-Access-Token':`${accessKeyToken}`
            }
        }
    }

    return await this.requestHelper.GETRequestHelper(options);


  }
    
}
