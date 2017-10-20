import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent {
  menu = [
    { 'name': 'Filter',  'link': 'filter' },
    { 'name': 'Google map',  'link': 'map' }
  ];
  constructor() {}
}
