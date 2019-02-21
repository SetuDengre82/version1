import { Component, OnInit } from '@angular/core';
import { TcpService } from './tcp.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  incomponent: number = 100;

  AppComponent() {

  }
  ngOnInit() {
  }
  title = 'second';

}
