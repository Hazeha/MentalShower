import { Component, OnInit } from '@angular/core';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { InMemoryService } from '../../_services/in-memory.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-fan-advanced',
  templateUrl: './fan-advanced.component.html',
  styleUrls: ['./fan-advanced.component.css']
})
export class FanAdvancedComponent implements OnInit {
  fan = faFan;
  airflow: any;
  constructor(private route: Router, private info: InMemoryService, private afs: AngularFireAuth) { }

  ngOnInit(): void {
  }
  openProile() {
    this.route.navigate(['profile']);
    console.log(this.info.room, this.info.zone)

  }
  airflowChange(event: any) {
    this.airflow = event.value;
    return;
  }
  userData() {
    console.log(this.airflow, this.info.room, this.info.zone);
    const data = {
      airflow: this.airflow,
      uid: this.afs.auth.currentUser.uid,
      room: this.info.room,
      zone: this.info.zone
    };
    this.info.create(data).subscribe(
      (response) => {
       alert('You data has been Successfully saved!');
       this.route.navigate(['profile']);
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
