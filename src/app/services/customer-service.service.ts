import { Injectable } from '@angular/core';
import { CustomerInterface } from '../interfaces/customer-interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  customers: CustomerInterface[] = [
    {  Id: 1,
       Site: 'VCA',
       Environment: 'Prod',
       Basicat: 'CNP',
       ProjectName: 'ProjetCanalPlus' , 
       SwanId: 'T123456111'},
    
    {  Id: 2,
       Site: 'CCA',
       Environment: 'PPROD',
       Basicat: 'MMA',
       ProjectName: 'ProjetMMA' , 
       SwanId: 'T123456222'},

    {  Id: 3,
       Site: 'CCA',
       Environment: 'DEV',
       Basicat: 'GMF',
       ProjectName: 'ProjetGMF' , 
       SwanId: 'T123456333'},
  ]
  constructor() { }

  getCustomers(){
    return this.customers;
  }
}
