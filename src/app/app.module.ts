import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { PageNotFoundComponent } from './page-not-found.component';

//Page used for practise just
import {PractiseComponent} from './practise/practise.component';
import {PractiseTableComponent} from './practise/practise-table.component';
import {PractiseService} from './practise/practise.service';

import { EmployeeService } from './services/employee.service';
import { CreateEmployeeCanDeactivateGuardService } from './services/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsGuardService } from './services/employee-details-guard.service';
import { PractiseSearchTablePipe } from './practise/practise-search-table.pipe';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent, canDeactivate: [CreateEmployeeCanDeactivateGuardService] },
  { path: 'employees/:id', component: EmployeeDetailsComponent, canActivate: [EmployeeDetailsGuardService] },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: 'practise', component: PractiseComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    PractiseComponent,
    PractiseTableComponent,
    PractiseSearchTablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService, CreateEmployeeCanDeactivateGuardService, EmployeeDetailsGuardService, PractiseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
