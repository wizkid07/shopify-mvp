import { Injectable } from '@nestjs/common';
import axios from 'axios';


@Injectable()
export class RequestHelpers{
    async GETRequestHelper(options:{url:string,config:any}){
        return await (await axios.get(options.url,options.config)).data;
    }
    async POSTRequestHelper(options:{url:string,body:any,config:any}){
        return await (await axios.post(options.url,options.body,options.config)).data;
    }
}
