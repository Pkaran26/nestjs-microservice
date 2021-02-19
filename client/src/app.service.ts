import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877
      }
    })
  }

  getPosts() {
    return this.client.send('getPosts', '');
  }

  addPost() {
    return this.client.send('addPost', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
  }
}
