import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(64)
      ])
    ])
  ]
})
export class UserListComponent implements OnInit {

  userList: User[] = new Array<User>();

  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.init().subscribe((data) => {
      console.log('init', this.userList, this.userService.getAll());
      if (this.userList.length === 0 && this.userService.getAll().length === 0) {
        this.userList = data.data;
        this.userService.getAllUser(this.userList);
      }
      else {
        this.userList = this.userService.getAll();
      }
    });
  }

  deleteUser(id: number) {
    this.userService.delete(id);
  }

}
