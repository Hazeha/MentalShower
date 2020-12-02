import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  constructor(private userout: LoginService, private authfire: AngularFireAuth) { }
  photoUrl = this.authfire.auth.currentUser.photoURL;
  email = this.authfire.auth.currentUser.email;
  name = this.authfire.auth.currentUser.displayName;
  ngOnInit(): void {
  }
  logout() {
    const result = this.userout.logout();
  }
}
