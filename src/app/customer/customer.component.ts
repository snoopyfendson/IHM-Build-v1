import { Component, OnInit } from '@angular/core';
import { CustomerInterface } from '../interfaces/customer-interface';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerServiceService } from '../services/customer-service.service'

@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  customerDataArray: CustomerInterface[] = [];

  dataSource = new MatTableDataSource<CustomerInterface>(); //Création d'une source de données
  
  columnsToDisplay = ['Site', 'Environment', 'Basicat', 'ProjectName', 'SwanId'];
  constructor(private customerService: CustomerServiceService){

  }
  ngOnInit(): void {
    this.customerDataArray = this.customerService.getCustomers();  /*Récupération de la liste des contacts*/
    this.dataSource = new MatTableDataSource<CustomerInterface>(this.customerDataArray); //Création de l'instance de stockage de données

    console.log(this.customerDataArray);
  }

}

