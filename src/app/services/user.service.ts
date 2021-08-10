import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.models';

const apiUrl = 'https://reqres.in/api/users';
const newApi = apiUrl + '/new';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = new Array<User>();

  constructor(private http: HttpClient) {
  }

  init() {
    return this.http.get<any>(apiUrl);
  }

  getAll() {
    return this.users;
  }

  getAllUser(userList: User[]) {
    this.users = userList;
  }

  get(id: number) {
    return this.users[id];
  }

  getId(user: User) {
    return this.users.indexOf(user);
  }

  add(user: User) {
    user['id'] = this.users.length + 1;
    let newLength = this.users.push(user);
    let index = newLength - 1;
    return index;
    // return this.http.post(apiUrl, {user});
  }

  update(id: number, first_name: string, last_name: string, email: string, avatar: string) {
    let user = this.users[id];
    user.first_name = first_name;
    user.last_name = last_name;
    user.email = email;
    user.avatar = avatar;

    // return this.http.
  }

  delete(id: number) {
    this.users.splice(id, 1);
  }
}
