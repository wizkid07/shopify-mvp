import {GraphQLModule} from '@nestjs/graphql'
import {ApolloServerPluginLandingPageLocalDefault} from 'apollo-server-core'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import {PrismaService} from './prisma.service'
import {HttpModule} from '@nestjs/axios'
import { MerchantResolver } from './merchant/merchant.resolver';
import { MerchantService } from './merchant/merchant.service';
import { ProductModule } from './product/product.module';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
    plugins:[ApolloServerPluginLandingPageLocalDefault()],
    autoSchemaFile:join(process.cwd(),'schema.gql'),
    introspection:true,
    playground:false
  }), ProductModule ,MerchantModule
],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
