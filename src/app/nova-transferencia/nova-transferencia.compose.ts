import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //PRA FORA-NO SUBMIT---
  @Output() aoTransferir=new EventEmitter<any>();


  valor:number;
  destino:number;
  id:number;

  constructor(private service:TransferenciaService){

  }

  transferir() {
    console.log('Solicitado nova transferencia');
    const transferir: Transferencia={id:0,valor:this.valor,destino:this.destino};
    this.service.adicionar(transferir).subscribe(resultado =>{
      console.log(resultado);
      this.limparCampos();
    } ,error =>console.error(error)


    );



  }

  limparCampos(){
    this.valor=0;
    this.destino=0;
  }

}
