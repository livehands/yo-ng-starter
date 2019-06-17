import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-router/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BaseService } from './services/base.service';
import { ConstantsService } from './services/constants.service';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavGlobalComponent } from './components/nav-global/nav-global.component';

@NgModule({
  declarations: [
    AppComponent,
    YesNoPipe,
    SafeHtmlPipe,
    PhonePipe,
    HomeComponent,
    PageNotFoundComponent,
    NavGlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BaseService,
    ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
