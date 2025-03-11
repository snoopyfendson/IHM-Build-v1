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

  updateCustomer(updateCustomer: CustomerInterface){

    const index = this.customers.findIndex(customer => customer.Id == updateCustomer.Id ); //Récupération de l'index du tableau "Customers"
    //MAJ du tableau "contacts" avec le contenu du formulaire
    this.customers[index].Site = updateCustomer.Site ;
    this.customers[index].Environment = updateCustomer.Environment ;
    this.customers[index].Basicat = updateCustomer.Basicat ;
    this.customers[index].ProjectName = updateCustomer.ProjectName ;
    this.customers[index].SwanId = updateCustomer.SwanId ;

  }

  deleteCustomer(id: number){
    const index = this.customers.findIndex(customer => customer.Id == id );
    this.customers.splice(index, 1);     //Supprime le customer avec l'index correspondant
  }

  createCustomer(newCustomer: CustomerInterface){
    
    //finding the highest Id
    let highestId = 0;
    this.customers.forEach(customerObject => {
      if (customerObject.Id > highestId)
        highestId = customerObject.Id ;
    })  
    
    //Adding new contact
    this.customers.push({
      Id: highestId+1,
      Site: newCustomer.Site,
      Environment: newCustomer.Environment,
      Basicat: newCustomer.Basicat,
      ProjectName: newCustomer.ProjectName,
      SwanId: newCustomer.SwanId,

    })
  }
}
