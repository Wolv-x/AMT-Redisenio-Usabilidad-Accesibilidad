import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfringementFormComponent } from './components/data-entry/infringement-form/infringement-form.component';
import { InfringementsRoutingModule } from './infringements-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { IdentificationCardComponent } from './components/identification-card/identification-card.component';



@NgModule({
  declarations: [
    InfringementFormComponent,
    FormPageComponent,
    DataEntryComponent,
    IdentificationCardComponent
  ],
  imports: [
    CommonModule,
    InfringementsRoutingModule,
    SharedModule,
    TranslateModule.forChild()
  ]
})
export class InfringementsModule { }
