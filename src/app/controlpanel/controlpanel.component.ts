import { Component, OnInit } from '@angular/core';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {
    arrow = faArrowAltCircleRight;

  constructor() {
  }

  ngOnInit(): void {
  }

}
