import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { TwoListsComponent } from './two-lists/two-lists.component';
import {SimpleListWithHandleComponent} from './simple-list-with-handle/simple-list-with-handle.component';
import { FreeDragComponent } from './free-drag/free-drag.component';
import {PortalModule} from '@angular/cdk/portal';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { PortalDemoComponent } from './portal-demo/portal-demo.component';
import {PortalwindowComponent} from './portalwindow/portalwindow.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleListComponent,
    SimpleListWithHandleComponent,
    TwoListsComponent,
    FreeDragComponent,
    PortalDemoComponent,
    PortalwindowComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
