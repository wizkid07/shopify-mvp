import {InputType,Field, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class DeleteOutput{
    @Field()
    count:number

}