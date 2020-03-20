import { Component } from '@angular/core';

import { boxes } from '../boxes';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.scss']
})
export class BoxListComponent {
  boxes = boxes;
}
