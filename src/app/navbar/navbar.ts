import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.html',
  styleUrls: [ './navbar.css' ]
})
export class navbarComponent  {
  name = 'Angular ' + VERSION.major;
}
