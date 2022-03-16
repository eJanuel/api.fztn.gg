import { Controller, Get, HttpException, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { RCON } from 'minecraft-server-util';
// import { status } from 'minecraft-server-util';

// const client = new RCON();

// const options = {
//   timeout: 1000 * 5, // timeout in milliseconds
//   enableSRV: true // SRV record lookup
// };

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get('status')
  // async getStatus(): Promise<String | any> {
  //   console.log('get status');
  //   status('fztn.gg', 25565, options)
  //     .then((result) => {
  //       console.log(result);
  //       return result;
  //     }).catch((error) => {
  //       console.log(error);
  //       return error;
  //     });
  // }

  // @Post('time')
  // async postTime(): Promise<String> {
  //   await client.connect('fztn.gg', 25575, { timeout: 10000 });
  //   await client.login('F59cDn9ydLS9cVtJKrQBU9SpwFf6MmbP', { timeout: 10000 });
  //   const message = await client.execute('time query daytime');
  //   await client.close();

  //   return message;
  // }
}