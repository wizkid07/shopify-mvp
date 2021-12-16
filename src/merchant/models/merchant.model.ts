import { ObjectType,Field, registerEnumType } from "@nestjs/graphql";
import { platform } from "os";

@ObjectType()
export class Merchant{
	@Field({nullable:true,description: "Merchant Id" })
	id: string

	@Field({description: "Merchant Domain" })
	merchant_domain: string

	@Field({description: "Merchant appid" })
	merchant_appid: number

	@Field({description:"Merchant AccessKeyToken"})
	access_token_key: string

	@Field({description:"Merchant Storefront accessTokem"})
	access_token_secret:string

	@Field({description:"Supported Platforms"})
	platform: string
}