import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitServiceService {

  ObtainedUser : any;
  constructor(private _http: HttpClient) { }

  public getGitUser(name : string){
    return this._http.get(`https://api.github.com/users/${name}`)
  }

}
