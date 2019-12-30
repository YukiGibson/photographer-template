import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LayoutTwoComponent} from './layout-two/layout-two.component';
import {LayoutRoutes} from './layout.routing';

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forChild(LayoutRoutes)
    ],
  declarations: [
    LayoutTwoComponent
  ],
  exports: [LayoutTwoComponent]
})
export class LayoutModule {
}
