import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from './components/calender/calender.component';
import { CalenderFormComponent } from './components/calender-from/calender-form.component';
import { CalenderRoutingModule } from './calender-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { TaskLogComponent } from './components/task-log/task-log.component';



@NgModule({
  declarations: [
    CalenderComponent,
    CalenderFormComponent,
    TaskLogComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CalenderRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers:[]
})
export class CalenderModule { }
