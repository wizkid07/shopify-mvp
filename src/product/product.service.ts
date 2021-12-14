import { Injectable } from '@nestjs/common';
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

  async fetchMultipleProducts(){

    let options = {
        url:`https://guhan-vjro.myshopify.com/api/2020-07/graphql.json`,
        body:`{
            shop {
              collectionByHandle(handle: "pant-collection") {
                title
                id
                collection_description: descriptionHtml
                collection_image: image {
                  originalSrc
                }
                products(first: 50, sortKey: COLLECTION_DEFAULT, reverse: false) {
                  pageInfo {
                    hasNextPage
                  }
                  edges {
                    cursor
                    node {
                      title
                      onlineStoreUrl
                      handle
                      id
                      descriptionHtml
                      vendor
                      productType
                      createdAt
                      updatedAt
                      tags
                      publishedAt
                      images(first: 1) {
                        edges {
                          node {
                            transformedSrc(maxHeight: 1000, maxWidth: 1000)
                            id
                            altText
                          }
                        }
                      }
                      options {
                        name
                        values
                      }
                      variants(first: 5) {
                        edges {
                          node {
                            sku
                            compareAtPrice
                            id
                            title
                            price
                            availableForSale
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }`,
          config:{
            headers: {
                "X-Shopify-Storefront-Access-Token": '02277a2566c200779f56cd9de66e6295',
                'Content-Type': 'application/graphql'
            },
          }

    }
    
    const products =  await this.requestHelper.POSTRequestHelper(options);

    console.log(JSON.stringify(products, null, 4));
  }
    
}
