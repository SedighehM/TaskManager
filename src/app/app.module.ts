import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  LocationStrategy,
  HashLocationStrategy,
  CommonModule,
} from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { HttpClientModule } from "@angular/common/http";

import {
  IconModule,
  IconSetModule,
  IconSetService,
} from "@coreui/icons-angular";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

import { AppComponent } from "./app.component";

// Import containers
import { DefaultLayoutComponent } from "./containers";

import { P404Component } from "./views/error/404.component";
import { P500Component } from "./views/error/500.component";

const APP_CONTAINERS = [DefaultLayoutComponent];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from "@coreui/angular";

// Import routing module
import { AppRoutingModule } from "./app.routing";

// Import 3rd party components
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TabsModule } from "ngx-bootstrap/tabs";
import { ChartsModule } from "ng2-charts";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./register/components/login/login.component";
import { RegisterComponent } from "./register/components/register/register.component";
import { RegisterModule } from "./register/register.module";
import { TaskLogComponent } from './calender/components/task-log/task-log.component';
import { ConvertDatePipe } from "./views/dashboard/pipes/convert-date.pipe";
import { ConvertTimePipe } from './containers/pipes/convert-time.pipe';

@NgModule({
  imports: [
    RegisterModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    ToastrModule.forRoot(),
  ],
  declarations: [AppComponent, ...APP_CONTAINERS, P404Component, P500Component,ConvertDatePipe, ConvertTimePipe],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    IconSetService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
