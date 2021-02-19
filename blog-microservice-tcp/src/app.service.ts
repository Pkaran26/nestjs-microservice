import { Injectable } from '@nestjs/common';
//import axios from 'axios';

@Injectable()
export class AppService {
  //private URL = 'https://jsonplaceholder.typicode.com';

  async getPosts(): Promise<any> {
    // const result = await axios.get(`${ this.URL }/posts`).catch(err=>{
    //   return err.response
    // })
    return [{ title: 'test' }]
  }

  async addPost(payload: any): Promise<any> {
    // const result = await axios.post(`${ this.URL }/posts`, payload).catch(err=>{
    //   return null
    // })
    return payload
  }
}
