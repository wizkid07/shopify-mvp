import { ObjectType, Field } from '@nestjs/graphql'


@ObjectType()
export class Product {
    @Field({description:'Product ID'})
    id: number

    @Field({description:'Product Title'})
    title: string

    @Field({description:'Body HTML'})
    body_html: string

    @Field({description:'Product Vendor'})
    vendor:string

    @Field({description:'Product Type'})
    product_type:string

    @Field({description:'Created At'})
    created_at:string

    @Field({description:'Updated At'})
    updated_at:string

    @Field({description:'Handle'})
    handle:string

    @Field({description:'Published At'})
    published_at:string

    @Field({nullable:true, description:'Template Suffix'})
    template_suffix:string

    @Field({description:'Product Tags'})
    tags:string

    @Field({nullable:true,description:'Status'})
    status:String

    @Field({nullable:true,description:'Published Scope'})
    published_scope:string
    
    @Field({nullable:true,description:'Admin graphql API ID'})
    admin_graphql_api_id: string
}