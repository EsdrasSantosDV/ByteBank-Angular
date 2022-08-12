import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
private listaTransferencia:any[];

  //URL DA MINHA API
  private url='http://localhost:3000/transferencias';

  //ESSA BIBLIOTECA PROVEM METODOS QUE CONSIGO FAZER REQUISOES PRA UMA API REST
  constructor(private httpClient:HttpClient) {
    this.listaTransferencia=[];

  }

  get transferencia(){
    return this.listaTransferencia;
  }

  //OBSERVABLE ALGO FUTURO
  todas():Observable<Transferencia[]>
  {
    return this.httpClient.get<Transferencia[]>(this.url);
  }




  adicionar(transferencia:Transferencia):Observable<Transferencia>
  {
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url,transferencia);
  }

  private hidratar(transferencia:any){
    transferencia.data=new Date();
  }


}
