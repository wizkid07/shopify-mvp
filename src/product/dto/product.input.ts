import { InputType,Field } from "@nestjs/graphql";

@InputType()
export class ProductFetchInput{
    @Field()
    appid:number

    @Field()
    productid:number
}