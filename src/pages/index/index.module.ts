import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.route';
import { SharedModule } from '../../shared';


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        IndexRoutingModule, SharedModule
    ],
    providers: [],
    bootstrap: [],
    exports: [IndexComponent]
})
export class IndexModule { }
