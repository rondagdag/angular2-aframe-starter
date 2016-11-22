import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {VRPlayer}  from './app.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [VRPlayer],
    bootstrap: [VRPlayer],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
