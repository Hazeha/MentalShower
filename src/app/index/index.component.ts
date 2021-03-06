import { Component, OnInit } from '@angular/core';
import {
  faFan,
  faGraduationCap,
  faArrowAltCircleRight,
  faChair,
  faUser,
  faCalendarAlt,
  faAddressCard
} from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../_services/user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  fan = faFan;
  chair = faChair;
  cap = faGraduationCap;
  arrow = faArrowAltCircleRight;
  user = faUser;
  calender = faCalendarAlt;
  contact = faAddressCard;

  userName = 'Guest12314';
  constructor(private loginuser: LoginService, private authfire: AngularFireAuth) { }

  ngOnInit() {
//    this.personsname = this.authfire.auth.currentUser.displayName;
  }

}
