import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

const logger = new Logger();

const microserviceOptions = {
  transport: Transport.TCP,
  options: {
    host: '127.0.0.1',
    port: 8877
  }
}

/**for redis**/
// const microserviceOptions = {
//   transport: Transport.TCP,
//   options: {
//     url: 'redis://localhost:6379'
//   }
// }

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions)
  app.listen(()=>{
    logger.log('microservice running...')
  })
}
bootstrap();
