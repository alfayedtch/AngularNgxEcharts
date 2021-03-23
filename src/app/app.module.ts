import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { Bar3dComponent } from './charts/bar3d/bar3d.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    Bar3dComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts:()=>import('echarts'),
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
