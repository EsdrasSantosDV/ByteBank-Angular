import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias:any[];
  constructor(private service:TransferenciaService) { }

  //PRIMEIRO E O SUCESSO
  ngOnInit(): void {
    this.service.todas().subscribe((transferencias:Transferencia[])=>{
      console.table(transferencias);
      this.transferencias=transferencias;
    })
  }

}
