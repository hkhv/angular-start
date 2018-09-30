import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IndexModule, NotfoundModule } from '../pages';
import { AppRoutingModule } from './app.route';
import { CoreModule } from '../core';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IndexModule,
        CoreModule,
        NotfoundModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
