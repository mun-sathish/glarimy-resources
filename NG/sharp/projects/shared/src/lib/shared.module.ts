import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [SharedComponent, WidgetComponent],
  imports: [
  ],
  exports: [SharedComponent, WidgetComponent]
})
export class SharedModule { }
