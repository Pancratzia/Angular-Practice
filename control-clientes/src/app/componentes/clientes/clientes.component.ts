import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteServicio : ClienteServicio) { }

  ngOnInit(): void {
    this.clienteServicio.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

  getTotalClientes(): number{
    if(this.clientes){
      return this.clientes.length;
    }
    return 0;
  }

  getSaldoTotal(): number{
    let saldoTotal: number = 0;
    if(this.clientes){
      this.clientes.forEach(cliente => {
        saldoTotal += cliente.saldo || 0;
      });
    }
    return saldoTotal;
  }

}
