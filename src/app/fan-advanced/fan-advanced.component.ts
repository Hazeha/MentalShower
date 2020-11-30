import { Component, OnInit } from '@angular/core';
import { faFan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fan-advanced',
  templateUrl: './fan-advanced.component.html',
  styleUrls: ['./fan-advanced.component.css']
})
export class FanAdvancedComponent implements OnInit {
  fan = faFan;
  constructor() { }

  ngOnInit(): void {
  }

}
