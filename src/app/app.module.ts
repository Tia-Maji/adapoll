import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from "@angular/material-moment-adapter";
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {AppState} from "@store/app/app.state";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,

    HighlightModule,

    MatMomentDateModule,

    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,

    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        // lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      }
    },
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
