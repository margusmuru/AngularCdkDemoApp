import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';

@Component({
  selector: 'app-portalwindow',
  templateUrl: './portalwindow.component.html'
})
export class PortalwindowComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(CdkPortal, { static: false }) portal: CdkPortal;

  private externalWindow: Window = null;

  constructor(private cfr: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {}

  ngOnInit() {
    this.externalWindow = window.open('', '', 'width=600, height=600');

    document.querySelectorAll('link, style').forEach(htmlElement => {
      this.externalWindow.document.head.appendChild(htmlElement.cloneNode(true));
    });
  }

  ngAfterViewInit(): void {
    const host: DomPortalOutlet = new DomPortalOutlet(
      this.externalWindow.document.body,
      this.cfr,
      this.appRef,
      this.injector
    );

    host.attach(this.portal);
  }

  ngOnDestroy() {
    this.externalWindow.close();
  }

}
