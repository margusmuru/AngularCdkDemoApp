import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-simple-list-with-handle',
  templateUrl: './simple-list-with-handle.component.html'
})
export class SimpleListWithHandleComponent {

  items = Array(5).fill(1).map((_, i) => 'item ' + i);

  drop($event: CdkDragDrop<any>) {
    moveItemInArray(this.items, $event.previousIndex, $event.currentIndex);
  }

}
