import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    ServiceCardComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class LandingPageModule { }
