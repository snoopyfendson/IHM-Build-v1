import { Component, OnInit } from '@angular/core';
import { CustomerInterface } from '../interfaces/customer-interface';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerServiceService } from '../services/customer-service.service'
import { UpdateCustomerDialogComponent } from '../dialogs/update-customer-dialog/update-customer-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCustomerDialogComponent } from '../dialogs/delete-customer-dialog/delete-customer-dialog.component';


@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  customerDataArray: CustomerInterface[] = [];

  dataSource = new MatTableDataSource<CustomerInterface>(); //Création d'une source de données
  
  columnsToDisplay = ['Site', 'Environment', 'Basicat', 'ProjectName', 'SwanId', 'Update', 'Delete'];
  constructor(private customerService: CustomerServiceService, private dialog: MatDialog){

  }
  ngOnInit(): void {
    this.customerDataArray = this.customerService.getCustomers();  /*Récupération de la liste des contacts*/
    this.dataSource = new MatTableDataSource<CustomerInterface>(this.customerDataArray); //Création de l'instance de stockage de données

    console.log(this.customerDataArray);
  }

  onUpdate(customer: CustomerInterface){
    let dialogRef = this.dialog.open(UpdateCustomerDialogComponent, {
      height: '500px',            /*Taille de la boite de dialogue*/
      width: '500px',
      data: customer,
    });
  }

  onDelete(customer: CustomerInterface){
    let dialogRef = this.dialog.open(DeleteCustomerDialogComponent, {
      height: '500px',            /*Taille de la boite de dialogue*/
      width: '500px',
      data: customer,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateDataSource(this.customerDataArray);
    })
  }

  updateDataSource(dataArray: CustomerInterface[]){
    this.dataSource.connect().next(dataArray);

}
}

