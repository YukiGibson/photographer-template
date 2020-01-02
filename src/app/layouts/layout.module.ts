import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LayoutTwoComponent} from './layout-two/layout-two.component';
import {LayoutRoutes} from './layout.routing';
import {HeaderComponent} from './shared-sections/header/header.component';
import {BannerComponent} from './shared-sections/banner/banner.component';
import { SpecialtiesComponent } from './shared-sections/specialties/specialties.component';
import { PortfolioComponent } from './shared-sections/portfolio/portfolio.component';
import { ContactComponent } from './shared-sections/contact/contact.component';
import { FooterComponent } from './shared-sections/footer/footer.component';

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forChild(LayoutRoutes)
    ],
  declarations: [
    LayoutTwoComponent,
    HeaderComponent,
    BannerComponent,
    SpecialtiesComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent
  ],
  exports: [LayoutTwoComponent]
})
export class LayoutModule {
}
