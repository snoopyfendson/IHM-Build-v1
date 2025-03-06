import { Component, OnInit } from '@angular/core';
import { NetworkInterface } from '../interfaces/network-interface';
import { MatTableDataSource } from '@angular/material/table';
import { NetworkServiceService } from '../services/network-service.service';
@Component({
  selector: 'app-network',
  standalone: false,
  templateUrl: './network.component.html',
  styleUrl: './network.component.scss'
})
export class NetworkComponent implements OnInit {


    networkDataArray: NetworkInterface[] = [];
  
    dataSource = new MatTableDataSource<NetworkInterface>(); //Création d'une source de données
    
    columnsToDisplay = ['Site', 'Environment', 'Basicat', 'ProjectName', 'SwanId', 'Update', 'Delete'];
    constructor(private networkService: NetworkServiceService){
  
    }
    ngOnInit(): void {
      this.networkDataArray = this.networkService.getNetworks();  /*Récupération de la liste des networks*/
      this.dataSource = new MatTableDataSource<NetworkInterface>(this.networkDataArray); //Création de l'instance de stockage de données
  
      console.log(this.networkDataArray);
    }

    onUpdate(network: NetworkInterface){

    }

    onDelete(network: NetworkInterface){

    }
}
