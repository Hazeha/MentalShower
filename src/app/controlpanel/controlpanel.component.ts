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
  selectPanelOpenState = false;
  qrPanelOpenState = false;
  rooms: any;
  zones: any;
  currentRoom: any;
  currentZone: any;
  chairs = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6}
  ];
  /** Constructor */
  constructor(
    private checkIn: CheckInService
  ) {
  }
  /** OnInit */
  ngOnInit(): void {
    this.getRooms();
  }
  /** Methods */
  getRooms(){
    this.checkIn.getRooms()
      .subscribe(
        data => {
          this.rooms = data;
          console.log(this.rooms);
        },
        error => {
        });
  }
  setRoom(id) {
    this.currentRoom = id;
    console.log(this.currentRoom, 'set as current room');
    this.getZones();
  }
  getZones() {
    this.checkIn.getZones(this.currentRoom)
      .subscribe(
        data => {
          this.zones = data;
          console.log(this.zones);
        },
        error => {
        });
  }
  setZone(id) {
    this.currentZone = id;
    console.log(this.currentZone, 'set as current Zone');
  }
}
