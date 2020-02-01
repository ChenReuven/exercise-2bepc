import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmployeeComponent} from './employee/pages/employee.component';
import {ManagerComponent} from './manager/pages/manager.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'employees', component: EmployeeComponent },
      { path: 'managers', component: ManagerComponent },
      { path: '**', redirectTo: 'employees' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


