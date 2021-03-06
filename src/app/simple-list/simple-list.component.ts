import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html'
})
export class SimpleListComponent {

  items = Array(10).fill(1).map((_, i) => 'item ' + i);

  drop($event: CdkDragDrop<any>) {
    moveItemInArray(this.items, $event.previousIndex, $event.currentIndex);
  }

}
