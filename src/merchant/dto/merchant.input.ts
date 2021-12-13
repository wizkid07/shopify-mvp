import {InputType,Field} from '@nestjs/graphql'

@InputType()
export class MerchantCreateInput{
    @Field()
    merchant_domain:string

    @Field()
    accessKeyToken:string
}