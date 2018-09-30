import { NgModule } from '../../node_modules/@angular/core';
import { CommonModule } from '../../node_modules/@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule, FormsModule
    ],
    exports: [
        CommonModule, ReactiveFormsModule, FormsModule
    ],
    declarations: [],
    providers: [],

})

export class SharedModule { }
