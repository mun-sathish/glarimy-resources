import { NgModule } from '@angular/core';
import { SlaComponent } from './sla.component';
import { DirectoryModule} from 'directory';

@NgModule({
  declarations: [SlaComponent],
  imports: [DirectoryModule],
  exports: [SlaComponent]
})
export class SlaModule { }
