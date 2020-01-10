import {  RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import {ListComponent} from './list/list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CreateComponent, EditComponent, ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class ApiModule { }
