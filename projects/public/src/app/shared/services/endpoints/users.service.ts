import { Injectable } from '@angular/core';
import { APIService } from '../../../core/services/http/api.service';
import { UrlEndpoints } from '../../constants/url-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _API: APIService) { }

  // Get All Users List 
  getUsersList(){
    return this._API.doGet(UrlEndpoints.GET_UsersList)
  }

  getUserById(id: string){
return this._API.doGet(UrlEndpoints.GET_UserById + id)
  }

  postUser(userApprove: any){
    return this._API.doPost(UrlEndpoints.POST_ApproveUser, userApprove)
  }
}
