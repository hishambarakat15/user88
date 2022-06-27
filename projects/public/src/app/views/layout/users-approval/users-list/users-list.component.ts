import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
})
export class UsersListComponent implements OnInit {
usersList: any[] = [];
personalImg: any;
  constructor(private _userService: UsersService , private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._userService.getUsersList().subscribe(res => {
      console.log(res)

      this.usersList = res.data.result ;
           console.log(this.usersList)

           this.personalImg = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
           + res.data.result.personalImage);

           
    }
      )
    
  }

}
