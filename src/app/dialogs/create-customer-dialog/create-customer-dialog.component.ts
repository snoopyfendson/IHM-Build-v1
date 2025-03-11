import { CustomerServiceService } from './../../services/customer-service.service';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerInterface } from '../../interfaces/customer-interface';


@Component({
  selector: 'app-create-customer-dialog',
  standalone: false,
  templateUrl: './create-customer-dialog.component.html',
  styleUrl: './create-customer-dialog.component.scss'
})
export class CreateCustomerDialogComponent {
  newCustomer!: CustomerInterface;

  createCustomerformGroup = new FormGroup({    
          site: new FormControl('', [Validators.required, Validators.maxLength(30)]),      
          environment: new FormControl('', [Validators.required, Validators.maxLength(30)]),   
          basicat: new FormControl('', [Validators.required, Validators.maxLength(50)]),    
          projectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
          swanId: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });

  customerToCreate!: CustomerInterface;

  constructor(public dialogRef: MatDialogRef<CreateCustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: CustomerInterface, private CustomerService: CustomerServiceService){
    this.customerToCreate = data;
  }

  onSubmit(){
    this.newCustomer = {
      Id: 0,
      Site: this.createCustomerformGroup.controls['site'].value as string,
      Environment: this.createCustomerformGroup.controls['environment'].value as string,
      Basicat: this.createCustomerformGroup.controls['basicat'].value as string,
      ProjectName: this.createCustomerformGroup.controls['projectName'].value as string,
      SwanId: this.createCustomerformGroup.controls['swanId'].value as string,
    }

    this.CustomerService.createCustomer(this.newCustomer);

    console.log(this.CustomerService.getCustomers());
    this.dialogRef.close();  //Fermeture de la boite de dialogue "Create"
  }
}


