import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { DocumentEntityRepository } from './app/document/db/document-entity.repository';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('Index.hbs')
  root() {
    return { message: 'sddsd' };
  }
}
