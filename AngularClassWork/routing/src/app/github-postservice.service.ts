import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubPostserviceService {

  url = 'https://api.github.com/users/divekjohns/followers';
  

  constructor(private http:Http) { }

  getAll(){
    return this.http.get(this.url);
  }
}
