import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AuthServiceService {
  constructor() {
   }

   getLoginUser(user){
      return new Promise((resolve, reject) => {
        if(user.username === '123' && user.password === '123'){
          resolve(true);
        }else{
          reject(false);
        }
        });
   }

}
