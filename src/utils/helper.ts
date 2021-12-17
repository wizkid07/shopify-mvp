import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as jsonata from "jsonata"


@Injectable()
export class RequestHelpers{
    async GETRequestHelper(options:{url:string,config:any}){
        try{
            const {data} =  await axios.get(options.url,options.config)
            return data;
        }catch(e){
            return null;
        }
    }
    async POSTRequestHelper(options:{url:string,body:any,config:any}){
        return await (await axios.post(options.url,options.body,options.config)).data;
    }
}

@Injectable()
export class MapperService{
    jsonMapper(json: any, mapper: any) {
		return Object.entries(mapper).reduce((acc: any, elem: any) => {

			const [nxtField, externalField] = elem

			const nxtValue = jsonata(externalField).evaluate(json) || null

			if (!Array.isArray(nxtValue)) return { ...acc, [nxtField]: nxtValue }

			return { ...acc, [nxtField]: [...nxtValue] }
		}, {})
	}
}
