import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TwoListsComponent } from './two-lists/two-lists.component';
import {SimpleListWithHandleComponent} from './simple-list-with-handle/simple-list-with-handle.component';
import { FreeDragComponent } from './free-drag/free-drag.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleListComponent,
    SimpleListWithHandleComponent,
    TwoListsComponent,
    FreeDragComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
