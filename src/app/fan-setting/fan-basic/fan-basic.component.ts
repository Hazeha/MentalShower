import { Component, OnInit } from '@angular/core';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fan-basic',
  templateUrl: './fan-basic.component.html',
  styleUrls: ['./fan-basic.component.css']
})
export class FanBasicComponent implements OnInit {
  arrow = faArrowAltCircleRight;
  constructor() { }

  ngOnInit(): void {
  }

}
