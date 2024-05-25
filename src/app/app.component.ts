import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from "@angular/cdk/drag-drop";
import {MainComponent} from "./main/main.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdkDropList, CdkDropListGroup, CdkDrag, MainComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{


  ngOnInit() {
  }

}
