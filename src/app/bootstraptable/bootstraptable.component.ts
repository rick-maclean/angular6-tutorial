import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bootstraptable',
  templateUrl: './bootstraptable.component.html',
  styleUrls: ['./bootstraptable.component.css']
})
export class BootstraptableComponent implements OnInit {
  wbtApps = [
    {
      title: 'Ga\'dang - Bible',
      packageName: 'org.wycliffe.gdg.nt.apk'
    },
    {
      title: 'Garífuna (Caribe) - Bible',
      packageName: 'org.scriptureearth.cab.nt.apk'
    }];

  constructor() {
  }

  ngOnInit() {
  }

}
