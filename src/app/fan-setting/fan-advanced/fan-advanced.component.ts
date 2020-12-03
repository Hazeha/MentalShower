import { Component, OnInit } from '@angular/core';
import { faFan } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fan-advanced',
  templateUrl: './fan-advanced.component.html',
  styleUrls: ['./fan-advanced.component.css']
})
export class FanAdvancedComponent implements OnInit {
  fan = faFan;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  openProile() {
    this.route.navigate(['profile']);

  }
}
