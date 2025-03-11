import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NetworkComponent } from './network/network.component';
import { HomeComponent } from './home/home.component';

//Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { UpdateCustomerDialogComponent } from './dialogs/update-customer-dialog/update-customer-dialog.component';
import { DeleteCustomerDialogComponent } from './dialogs/delete-customer-dialog/delete-customer-dialog.component';
import { CreateCustomerDialogComponent } from './dialogs/create-customer-dialog/create-customer-dialog.component';
import { VMComponent } from './vm/vm.component';
import { AddVmDialogComponent } from './dialogs/add-vm-dialog/add-vm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NetworkComponent,
    HomeComponent,
    UpdateCustomerDialogComponent,
    DeleteCustomerDialogComponent,
    CreateCustomerDialogComponent,
    VMComponent,
    AddVmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
