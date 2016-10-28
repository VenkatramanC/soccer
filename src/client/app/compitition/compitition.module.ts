import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CompititionComponent} from './compitition.component';
import { CompititionService} from './compitition.service'

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CompititionComponent],
  exports: [CompititionComponent],
  providers: [CompititionService]
})
export class CompititionModule { }