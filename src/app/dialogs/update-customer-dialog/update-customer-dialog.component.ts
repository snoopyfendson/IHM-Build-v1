import { CustomerServiceService } from './../../services/customer-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerInterface } from '../../interfaces/customer-interface';

@Component({
  selector: 'app-update-customer-dialog',
  standalone: false,
  templateUrl: './update-customer-dialog.component.html',
  styleUrl: './update-customer-dialog.component.scss'
})
export class UpdateCustomerDialogComponent implements OnInit {

  updateCustomer!: CustomerInterface;

  updateCustomerformGroup = new FormGroup({    
          site: new FormControl('', [Validators.required, Validators.maxLength(30)]),      
          environment: new FormControl('', [Validators.required, Validators.maxLength(30)]),   
          basicat: new FormControl('', [Validators.required, Validators.maxLength(50)]),    
          projectName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
          swanId: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    });

  customerToUpdate!: CustomerInterface;

  constructor(public dialogRef: MatDialogRef<UpdateCustomerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: CustomerInterface, private CustomerService: CustomerServiceService){
    this.customerToUpdate = data;
  }

  ngOnInit(){
    //Récupération des différentes valeurs pour l'enregistrement correspondant au bouton Update pour populer le formulaire
    this.updateCustomerformGroup.controls['site'].setValue(this.customerToUpdate.Site);
    this.updateCustomerformGroup.controls['environment'].setValue(this.customerToUpdate.Environment);
    this.updateCustomerformGroup.controls['basicat'].setValue(this.customerToUpdate.Basicat);
    this.updateCustomerformGroup.controls['projectName'].setValue(this.customerToUpdate.ProjectName);
    this.updateCustomerformGroup.controls['swanId'].setValue(this.customerToUpdate.SwanId);

    console.log(this.customerToUpdate);
   
  }

  onSubmit(){
    this.updateCustomer = {
      Id: this.customerToUpdate.Id,
      Site: this.updateCustomerformGroup.controls['site'].value as string,
      Environment: this.updateCustomerformGroup.controls['environment'].value as string,
      Basicat: this.updateCustomerformGroup.controls['basicat'].value as string,
      ProjectName: this.updateCustomerformGroup.controls['projectName'].value as string,
      SwanId: this.updateCustomerformGroup.controls['swanId'].value as string,
    }

    this.CustomerService.updateCustomer(this.updateCustomer);

    console.log(this.CustomerService.getCustomers());
    this.dialogRef.close();  //Fermeture de la boite de dialogue "Delete"
  }
}
