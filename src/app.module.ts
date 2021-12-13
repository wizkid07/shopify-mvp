import {GraphQLModule} from '@nestjs/graphql'
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import {PrismaService} from './prisma.service'
import { MerchantResolver } from './merchant/merchant.resolver';
import { MerchantService } from './merchant/merchant.service';

@Module({
  imports: [GraphQLModule.forRoot({
    plugins:[ApolloServerPluginLandingPageLocalDefault()],
    autoSchemaFile:join(process.cwd(),'schema.gql'),
    introspection:true,
    playground:false
  })],
  controllers: [AppController],
  providers: [AppService,PrismaService, MerchantResolver, MerchantService],
})
export class AppModule {}
