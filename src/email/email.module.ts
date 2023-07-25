import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class EmailModule {
  static forRoot({}): DynamicModule {
    return {
      module: EmailModule,
    };
  }
}
