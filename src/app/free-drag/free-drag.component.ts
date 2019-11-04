import {Component} from '@angular/core';

@Component({
  selector: 'app-free-drag',
  templateUrl: './free-drag.component.html'
})
export class FreeDragComponent {

  dragPosition1 = {x: 0, y: 0};
  dragPosition2 = {x: 200, y: 0};

  changePosition() {
    this.dragPosition1 = {x: this.dragPosition1.x + 50, y: this.dragPosition1.y + 50};
  }

}
