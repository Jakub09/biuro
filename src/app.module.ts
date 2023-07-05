import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email/email.controller';

import { DocumetnsModule } from './app/document/documents.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DocumetnsModule,
    MongooseModule.forRoot('mongodb://192.168.0.148:27017/'),
  ],
  controllers: [AppController, EmailController],
  providers: [AppService],
})
export class AppModule {}
