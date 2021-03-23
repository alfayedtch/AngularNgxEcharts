import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { Bar3dComponent } from './charts/bar3d/bar3d.component'

const routes: Routes = [
  {path:'line-chart',component:LineChartComponent},
  {path:'bar3d',component:Bar3dComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
