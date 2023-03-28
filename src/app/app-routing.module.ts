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
import { CardComponent } from './card/card.component';
import { NitinComponent } from './nitin/nitin.component';
import { Practice2Component } from './practice2/practice2.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
const routes: Routes = [
  // {path: 'departments', component: DepartmentListComponent },
  {path: 'employees', component: EmployeeListComponent},
  {path:'home', component: HomeComponent},
  {path:'new', component: NewComponent},
  {path: 'payment', component:PaymentComponent},
  {path: 'practice', component:PracticeComponent},
  {path: 'invoice', component:InvoiceComponent},
  {path: 'paymentlist', component:PaymentlistComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'card', component:CardComponent},
  {path: 'nitin', component: NitinComponent},
  {path: 'practice2', component: Practice2Component},
  {path: 'sibling1', component: Sibling1Component},
  {path: 'sibling2', component: Sibling2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

