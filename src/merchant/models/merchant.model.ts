import { ObjectType,Field } from "@nestjs/graphql";

@ObjectType()
export class Merchant{
	@Field({nullable:true,description: "Merchant Id" })
	id: string

	@Field({description: "Merchant Domain" })
	merchant_domain: string

	@Field({description: "Merchant appid" })
	merchant_appid: number

	@Field({description:"Merchant AccessKeyToken"})
	accessKeyToken: string
}