import { ObjectType, Field, registerEnumType } from '@nestjs/graphql'


@ObjectType()
export class Product {
    @Field({description:'Product ID'})
    id: number

    @Field({description:'Product Title'})
    title: string

    @Field({nullable:true,description:'Body HTML'})
    body_html: string

    @Field({nullable:true,description:'Product Vendor'})
    vendor:string

    @Field({nullable:true,description:'Product Type'})
    product_type:string

    @Field({nullable:true,description:'Created At'})
    created_at:string

    @Field({nullable:true,description:'Updated At'})
    updated_at:string

    @Field({nullable:true,description:'Handle'})
    handle:string

    @Field({nullable:true,description:'Published At'})
    published_at:string

    @Field({nullable:true, description:'Template Suffix'})
    template_suffix:string

    @Field({nullable:true,description:'Product Tags'})
    tags:string

    @Field({nullable:true,description:'Status'})
    status:String

    @Field({nullable:true,description:'Published Scope'})
    published_scope:string
    
    @Field({nullable:true,description:'Admin graphql API ID'})
    admin_graphql_api_id: string
}