import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextFieldComponent } from './form-components/se-text-field/text-field/text-field.component';
import { SelectComponent } from './form-components/se-select/select/select.component';
import { RadioGroupComponent } from './form-components/se-radio-group/radio-group/radio-group.component';
import { CheckboxComponent } from './form-components/se-checkbox/checkbox/checkbox.component';
import { DatepickerComponent } from './form-components/se-datepicker/datepicker/datepicker.component';
import { NumberFieldComponent } from './form-components/se-numberfield/number-field/number-field.component';
import { SwitchComponent } from './form-components/se-switch/switch/switch.component';
import { TextAreaComponent } from './form-components/se-textarea/text-area/text-area.component';
import { DisplayOnlyComponent } from './form-components/se-display-only/display-only/display-only.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFieldComponent,
    SelectComponent,
    RadioGroupComponent,
    CheckboxComponent,
    DatepickerComponent,
    NumberFieldComponent,
    SwitchComponent,
    TextAreaComponent,
    DisplayOnlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

