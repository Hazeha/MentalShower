import { Component, OnInit } from '@angular/core';
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons';

import { CheckInService } from '../_services/check-in.service';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {
    arrow = faArrowAltCircleRight;

  /** Properties */
  currentPosition = {
    currentZone: null,
    currentRoom: null
  };

  /** Constructor */
  constructor(
    private checkIn: CheckInService
  ) {
  }
  /** OnInit */
  ngOnInit(): void {
  }

}
