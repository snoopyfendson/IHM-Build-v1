import { Component, Inject } from '@angular/core';
import { VmInterface } from '../../interfaces/vm-interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VmServiceService } from '../../services/vm-service.service';

@Component({
  selector: 'app-add-vm-dialog',
  standalone: false,
  templateUrl: './add-vm-dialog.component.html',
  styleUrl: './add-vm-dialog.component.scss'
})
export class AddVmDialogComponent {

  newVm!: VmInterface;
  
    addVmformGroup = new FormGroup({    
            projectName: new FormControl('', [Validators.required, Validators.maxLength(30)]),      
            basicat: new FormControl('', [Validators.required, Validators.maxLength(30)]),   
            hostname: new FormControl('', [Validators.required, Validators.maxLength(50)]),    
            os: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            cpu: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            ram: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            vdisk1: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            vdisk2: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            networkCard: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      });
  
    vmToAdd!: VmInterface;
  
    constructor(public dialogRef: MatDialogRef<AddVmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: VmInterface, private vmService: VmServiceService){
      this.vmToAdd = data;
    }
  
    onSubmit(){
      this.newVm = {
        Id: 0,
        ProjectName: this.addVmformGroup.controls['projectName'].value as string,
        Basicat: this.addVmformGroup.controls['basicat'].value as string,
        Hostname: this.addVmformGroup.controls['hostname'].value as string,
        OS: this.addVmformGroup.controls['os'].value as string,
        CPU: this.addVmformGroup.controls['cpu'].value as string,
        RAM: this.addVmformGroup.controls['ram'].value as string,
        vDisk1: this.addVmformGroup.controls['vdisk1'].value as string,
        vDisk2: this.addVmformGroup.controls['vdisk2'].value as string,
        NetworkCard: this.addVmformGroup.controls['networkCard'].value as string,
      }
  
      this.vmService.addVm(this.newVm);
  
      console.log(this.vmService.getVMs());
      this.dialogRef.close();  //Fermeture de la boite de dialogue "Create"
    }
  }
  
  
  

