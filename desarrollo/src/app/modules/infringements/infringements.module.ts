import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfringementFormComponent } from './components/data-entry/infringement-form/infringement-form.component';
import { InfringementsRoutingModule } from './infringements-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DataEntryComponent } from './components/data-entry/data-entry.component';
import { IdentificationCardComponent } from './components/history/identification-card/identification-card.component';
import { HistoryComponent } from './components/history/history.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { AmountValuesComponent } from './components/history/amount-values/amount-values.component';
import { InfringementsTableComponent } from './components/history/infringements-table/infringements-table.component';
import { InfringementDetailComponent } from './components/history/infringement-detail/infringement-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InfringementFormComponent,
    FormPageComponent,
    DataEntryComponent,
    IdentificationCardComponent,
    HistoryComponent,
    HistoryPageComponent,
    AmountValuesComponent,
    InfringementsTableComponent,
    InfringementDetailComponent
  ],
  imports: [
    CommonModule,
    InfringementsRoutingModule,
    SharedModule,
    TranslateModule.forChild(),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InfringementsModule { }
