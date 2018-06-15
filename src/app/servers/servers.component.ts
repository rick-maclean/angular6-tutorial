import {Component, OnInit} from '@angular/core';

@Component({
  // selector: '[app-servers]',  attribute
  // selector: '.app-servers',   class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'no server was created yet!';
  serverNameUserEnters = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2220);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'a server was created';
  }

  onUpdateServerName(e: Event) {
    // console.log(e);
    this.serverNameUserEnters = (<HTMLInputElement>e.target).value;
  }

}
