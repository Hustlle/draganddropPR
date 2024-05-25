import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    TuiButtonModule
  ],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss'
})
export class HeaderDashboardComponent {

}
