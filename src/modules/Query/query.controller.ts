import { Controller, Get } from '@nestjs/common';
import { QueryService } from './query.service';
import { of } from 'rxjs';

@Controller('query')
export class QueryController {
  constructor(private service: QueryService) { }

  @Get('status')
  async getStatus(): Promise<String | any> {
    console.log('yes');
    return of(this.service.queryStatus());
  }
}
