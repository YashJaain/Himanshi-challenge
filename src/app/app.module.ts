import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
// import { GooglePayButtonModule } from '@google-pay/button-angular';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CompComponent } from './comp/comp.component';
// import { LearnComponent } from './learn/learn.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { NewComponent } from './new/new.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { PracticeComponent } from './practice/practice.component';
import { InvoiceComponent } from './invoice/invoice.component';
// import { ParentComponent } from './parent/parent.component';
// import { ChildComponent } from './child/child.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';


@NgModule({
  declarations: [
    AppComponent,
    // CompComponent,
    // LearnComponent,
    // DepartmentListComponent,
    EmployeeListComponent,
    HomeComponent,
    NavbarComponent,
    PaymentComponent,
    NewComponent,
    PracticeComponent,
    InvoiceComponent,
    // ParentComponent,
    // ChildComponent,
    ProfileComponent,
    PaymentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    GooglePayButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
