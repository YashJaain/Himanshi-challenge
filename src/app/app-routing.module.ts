import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { NewComponent } from './new/new.component';
import { PracticeComponent } from './practice/practice.component';
import { InvoiceComponent } from './invoice/invoice.component';
// import { ParentComponent } from './parent/parent.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
const routes: Routes = [
  // {path: 'departments', component: DepartmentListComponent },
  {path: 'employees', component: EmployeeListComponent},
  {path:'home', component: HomeComponent},
  {path:'new', component: NewComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'practice', component:PracticeComponent},
  {path: 'invoice', component:InvoiceComponent},
  {path: 'paymentlist', component:PaymentlistComponent},
  {path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

