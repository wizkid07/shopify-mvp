import {InputType,Field} from '@nestjs/graphql'

@InputType()
export class MerchantCreateInput{
    @Field()
    merchant_domain:string

    @Field()
    access_token_key:string

    @Field()
    access_token_secret:string

    @Field()
    platform:string
}