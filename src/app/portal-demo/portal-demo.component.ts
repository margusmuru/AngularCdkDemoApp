import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-portal-demo',
  templateUrl: './portal-demo.component.html'
})
export class PortalDemoComponent {

  items: string[] = Array(10).fill(1).map((value, index, arr) => 'Item ' + index);
  noItems: string[] = [];

  drop($event: CdkDragDrop<any>) {
    transferArrayItem(this.items, this.noItems, $event.previousIndex, $event.currentIndex);
  }

}
