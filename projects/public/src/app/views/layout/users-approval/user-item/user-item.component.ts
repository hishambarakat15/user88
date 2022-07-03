import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'projects/public/src/app/shared/services/endpoints/users.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
})
export class UserItemComponent implements OnInit {
  userItem!: any;
  nationalId!: [];
  userId!: string;
  natiolalIdBack: any;
  imagePathFrontNational: any;
  imagePathBackNational: any;
  imagePathFrontLicense: any;
  imagePathBackLicense: any;
  constructor(
    private _userService: UsersService,
    private _sanitizer: DomSanitizer,
    private route: ActivatedRoute, 
    private router : Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.userId = params['id']));

    this._userService.getUserById(this.userId).subscribe((res) => {
      console.log("getUserById", res);
      this.userItem = res.data;
      this.imagePathFrontNational = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,' +
          res.data.userDocuments.find((x: any) => x.documnetType == 1).content
      );
      this.imagePathBackNational = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,' +
          res.data.userDocuments.find((x: any) => x.documnetType == 2).content
      );
      this.imagePathFrontLicense = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,' +
          res.data.userDocuments.find((x: any) => x.documnetType == 3).content
      );
      this.imagePathBackLicense = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;base64,' +
          res.data.userDocuments.find((x: any) => x.documnetType == 4).content
      );
    });
  }

  accceptClicked() {
    const obj = {
      clientNationalId: this.userItem.nationalId,
      riskComment: '',
      clientStatus: 1,
    };

    console.log(obj)
    this._userService.postUser(obj).subscribe((res) => this.router.navigate(['/layout/users-approval']));
  }
  rejectClicked(){
    const obj = {
      clientNationalId: this.userItem.nationalId,
      riskComment: '',
      clientStatus: 0,
    };
    console.log(obj)
    this._userService.postUser(obj).subscribe((res) => this.router.navigate(['/layout/users-approval']));
  }
}
