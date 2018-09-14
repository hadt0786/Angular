import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubProfileserviceService {

  url = 'https://api.github.com/users/divekjohns';

  

  constructor(private http:Http) { }

  getAll(){
    return this.http.get(this.url);
  }
  changeUrl(id){
    this.url+=this.url+"/:"+id;
    return this.http.get(this.url);
  }
}
