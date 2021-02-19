import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('getPosts')
  async getPosts(): Promise<any> {
    return await this.appService.getPosts();
  }

  @MessagePattern('addPost')
  async addPost(payload: any): Promise<any> {
    return await this.appService.addPost(payload);
  }
}
