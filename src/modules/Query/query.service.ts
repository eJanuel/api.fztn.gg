import { Injectable } from '@nestjs/common';
import { status } from 'minecraft-server-util';

const options = {
    timeout: 1000 * 5, // timeout in milliseconds
    enableSRV: true // SRV record lookup
  };
  

@Injectable()
export class QueryService {
  constructor() {}

  async queryStatus() {
    return await status('fztn.gg', 25565, options)
  }
}
