import { Component } from '@angular/core';
import {HeaderDashboardComponent} from "./header-dashboard/header-dashboard.component";
import {DashboardMainComponent} from "./dashboard-main/dashboard-main.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HeaderDashboardComponent,
    DashboardMainComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
