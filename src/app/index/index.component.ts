import { Component, OnInit } from '@angular/core';
import {faFan, faGraduationCap, faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
