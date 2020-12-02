import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {CheckInService} from '../../_services/check-in.service';

@Component({
  selector: 'app-zone-select',
  templateUrl: './zone-select.component.html',
  styleUrls: ['./zone-select.component.css']
})
export class ZoneSelectComponent implements OnInit {
  /** Two Way Properties */
  @Input() position: any;
  @Output() positionChange = new EventEmitter<object>();

  /** Properties */
  panelOpenState = false;
  rooms: any;
  zones: any;
  currentZone: any;
  currentRoom: any;
  currentZoneId: any;
  chairs = [
    {id: 1, taken: true},
    {id: 2, taken: true},
    {id: 3, taken: false},
    {id: 4, taken: false},
    {id: 5, taken: false},
    {id: 6, taken: false}
  ];
  constructor(private checkIn: CheckInService) { }

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
  setLocalZone(i){
    this.currentZoneId = i;
    console.log(this.currentZoneId, 'set as local current Zone');

  }
  setZone(id, localId) {
    this.currentZone = id;
    this.currentZoneId = localId;
    this.position.currentRoom = this.currentRoom;
    this.position.currentZone = (localId + 1);
    console.log(this.currentZone, 'set as current Zone');
    this.positionChange.emit(this.position);
  }
}
