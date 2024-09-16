import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Patch,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  getReqs(@Body() body: any, @Headers() headers, @Req() req: Request): string {
    console.log(`GET ${req.url}`);
    console.log(body);
    console.log(headers);
    return this.appService.getHello();
  }

  @Post('*')
  postReqs(@Body() body: any, @Headers() headers, @Req() req: Request): string {
    console.log(`POST ${req.url}`);
    console.log(body);
    console.log(headers);
    return this.appService.getHello();
  }

  @Patch('*')
  patchReqs(
    @Body() body: any,
    @Headers() headers,
    @Req() req: Request,
  ): string {
    console.log(`PATCH ${req.url}`);
    console.log(body);
    console.log(headers);
    return this.appService.getHello();
  }

  @Put('*')
  putReqs(@Body() body: any, @Headers() headers, @Req() req: Request): string {
    console.log(`PUT ${req.url}`);
    console.log(body);
    console.log(headers);
    return this.appService.getHello();
  }

  @Delete('*')
  deleteReqs(
    @Body() body: any,
    @Headers() headers: any,
    @Req() req: Request,
  ): string {
    console.log(`DELETE ${req.url}`);
    console.log(body);
    console.log(headers);
    return this.appService.getHello();
  }
}
