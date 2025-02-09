import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmployeeComponent} from './modules/employee/pages/employee.component';
import {ManagerComponent} from './modules/manager/pages/manager.component';
import { EmployeeDetailsComponent } from './modules/employee/components/employee-details/employee-details.component';
import { ManagerDetailsComponent } from './modules/manager/manager-details/manager-details.component';
import { APP_ROUTE_PATHS } from './constants/app-routes-paths.const';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: APP_ROUTE_PATHS.employees, component: EmployeeComponent },
      { path: APP_ROUTE_PATHS.employeeDetails, component: EmployeeDetailsComponent},
      { path: APP_ROUTE_PATHS.managers, component: ManagerComponent },
      { path: APP_ROUTE_PATHS.managerDetails, component: ManagerDetailsComponent},
      { path: APP_ROUTE_PATHS.default, redirectTo: APP_ROUTE_PATHS.employees}
    ], { useHash: true })
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


