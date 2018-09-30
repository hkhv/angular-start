import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';


const routes: Routes = [{
    path: 'index',
    component: IndexComponent
}];

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class IndexRoutingModule { }

export const routedComponents = [IndexComponent];
