import { Module } from '@nestjs/common';
import { QueryModule } from './modules/Query/query.module';

@Module({
  imports: [QueryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
