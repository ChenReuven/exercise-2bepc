import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {EmployeeComponent} from './employee/pages/employee.component';
import {ManagerComponent} from './manager/pages/manager.component';
import { PersonDetailsComponent } from './shared/components/person-details/person-details.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'employees', component: EmployeeComponent },
      { path: 'employees/details/:id', component: EmployeeDetailsComponent},
      { path: 'managers', component: ManagerComponent },
      { path: 'managers/details/:id', component: PersonDetailsComponent},
      { path: '**', redirectTo: 'employees' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


