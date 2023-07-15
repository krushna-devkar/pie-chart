import { Component, OnInit } from '@angular/core';
import { Chart , registerables } from 'chart.js';
Chart.register(...registerables)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chart';

  
}
