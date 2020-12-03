import { Component, OnInit } from '@angular/core';
import { faFan, faGraduationCap, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../shared/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  fan = faFan;
  cap = faGraduationCap;
  arrow = faArrowAltCircleRight;
  personsname = 'Guest';
  constructor(private loginuser: LoginService, private authfire: AngularFireAuth) { }

  ngOnInit() {
//    this.personsname = this.authfire.auth.currentUser.displayName;
  }

}
