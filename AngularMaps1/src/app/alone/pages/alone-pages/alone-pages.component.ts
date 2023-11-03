import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AloneCounterComponent } from '../../components/alone-counter/alone-counter.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  imports: [AloneCounterComponent, SideMenuComponent],
  templateUrl: './alone-pages.component.html',
  styleUrls: ['./alone-pages.component.css']
})
export class AlonePagesComponent {

}
