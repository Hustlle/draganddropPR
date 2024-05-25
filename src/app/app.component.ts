import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from "@angular/cdk/drag-drop";
import {MainComponent} from "./components/main/main.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CdkDropList, CdkDropListGroup, CdkDrag, MainComponent, HeaderComponent, TuiRootModule, TuiDialogModule, TuiAlertModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent implements OnInit {


  ngOnInit() {
  }

}
