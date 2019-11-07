import { NgModule } from '@angular/core';
import { SsdiComponent } from './ssdi.component';
import { DirectoryModule } from 'directory';

@NgModule({
  declarations: [SsdiComponent],
  imports: [DirectoryModule],
  exports: [SsdiComponent]
})
export class SsdiModule { }
