import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/models/user.models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  userId: number;
  new: boolean;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.user = new User();
      if(params.id) {
        this.user = this.userService.get(params.id);
        this.userId = params.id;
        this.new = false;
      }
      else {
        this.new = true;
      }
    })
  }

  onSubmit(form: NgForm) {
    if(this.new) {
      this.userService.add(form.value);
    }
    else {
      this.userService.update(this.userId, form.value.first_name, form.value.last_name, form.value.email, form.value.avatar)
    }
    this.router.navigateByUrl('/');
    //console.log(this.userService.users);
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
