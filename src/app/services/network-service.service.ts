import { Injectable } from '@angular/core';
import { NetworkInterface } from '../interfaces/network-interface';

@Injectable({
  providedIn: 'root'
})
export class NetworkServiceService {

  networks: NetworkInterface[] = [
      {  Id: 1,
         NetworkName: 'BSG_DGF_ADM_INFRA_FLEX',
         NetworkId: 1102,
         NetwordAddress: '172.28.19.0/24',
         NetworkGateway: '172.28.19.1'},
       
      {  Id: 2,
          NetworkName: 'BSG_DGF_DI_INFRA_FLEX',
          NetworkId: 112,
          NetwordAddress: '172.28.120.0/24',
          NetworkGateway: '172.28.120.1'},
  
      {  Id: 3,
            NetworkName: 'BSG_DGF_DE_INFRA_FLEX',
            NetworkId: 420,
            NetwordAddress: '172.28.28.0/24',
            NetworkGateway: '172.28.28.1'},
    ]
  constructor() { }

  getNetworks(){
    return this.networks;
  }
}
