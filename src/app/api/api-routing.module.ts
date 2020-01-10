import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create'},
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiRoutingModule { }