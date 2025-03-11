import { Injectable } from '@angular/core';
import { VmInterface } from '../interfaces/vm-interface';

@Injectable({
  providedIn: 'root'
})
export class VmServiceService {

  vms: VmInterface[] = [
        {  Id: 1,
           ProjectName: '',
           Basicat: '',
           Hostname: '',
           OS: '',
           CPU: '',
           RAM: '',
           vDisk1: '',
           vDisk2: '',
           NetworkCard: ''
          },
         
          {  Id: 2,
            ProjectName: '',
            Basicat: '',
            Hostname: '',
            OS: '',
            CPU: '',
            RAM: '',
            vDisk1: '',
            vDisk2: '',
            NetworkCard: ''
           },
    
           {  Id: 3,
            ProjectName: '',
            Basicat: '',
            Hostname: '',
            OS: '',
            CPU: '',
            RAM: '',
            vDisk1: '',
            vDisk2: '',
            NetworkCard: ''
           },
      ]
  constructor() { }

  getVMs(){
    return this.vms;
  }

  addVm(newVm: VmInterface){

}
}