import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxsModule} from "@ngxs/store";
import {environment} from "../environments/environment";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {AppState} from "@store/app/app.state";
import {HIGHLIGHT_OPTIONS, HighlightModule} from "ngx-highlightjs";
import {NgxsRouterPluginModule} from "@ngxs/router-plugin";
import {NgxsFormPluginModule} from "@ngxs/form-plugin";
import {NgxsStoragePluginModule} from "@ngxs/storage-plugin";
import {PollState} from "@store/polls/poll.state";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,

    HighlightModule,

    NgxsModule.forRoot([AppState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: [PollState, AppState]
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
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
    // {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    // {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
