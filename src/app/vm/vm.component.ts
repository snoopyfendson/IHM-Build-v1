import { VmServiceService } from './../services/vm-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { VmInterface } from './../interfaces/vm-interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddVmDialogComponent } from '../dialogs/add-vm-dialog/add-vm-dialog.component';

@Component({
  selector: 'app-vm',
  standalone: false,
  templateUrl: './vm.component.html',
  styleUrl: './vm.component.scss'
})
export class VMComponent implements OnInit {

   vmDataArray: VmInterface[] = [];
  
    dataSource = new MatTableDataSource<VmInterface>(); //Création d'une source de données
    
    columnsToDisplay = ['ProjectName', 'Basicat', 'Hostname', 'OS', 'CPU', 'RAM', 'vDisk1', 'vDisk2', 'NetworkCard'];
  
    constructor(private vmService: VmServiceService, private dialog: MatDialog){
  
    }
    ngOnInit(): void {
      this.vmDataArray = this.vmService.getVMs();  /*Récupération de la liste des contacts*/
      this.dataSource = new MatTableDataSource<VmInterface>(this.vmDataArray); //Création de l'instance de stockage de données
  
      console.log(this.vmDataArray);

    
    }

    onAddVm(){
      let dialogRef = this.dialog.open(AddVmDialogComponent, {
        height: '500px',            /*Taille de la boite de dialogue*/
        width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
        this.createDataSource(this.vmDataArray);
      })
        
    }

    createDataSource(dataArray: VmInterface[]){
      this.dataSource.connect().next(dataArray);
    }
  
}
