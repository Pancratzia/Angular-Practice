import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertMessagesService } from 'jjwins-angular-alert-messages';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[];
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  constructor(
    private clienteServicio: ClienteServicio,
    private alertMessages: AlertMessagesService
  ) {}

  ngOnInit(): void {
    this.clienteServicio
      .getClientes()
      .subscribe((clientes) => (this.clientes = clientes));
  }

  getTotalClientes(): number {
    if (this.clientes) {
      return this.clientes.length;
    }
    return 0;
  }

  getSaldoTotal(): number {
    let saldoTotal: number = 0;
    if (this.clientes) {
      this.clientes.forEach((cliente) => {
        saldoTotal += cliente.saldo || 0;
      });
    }
    return saldoTotal;
  }

  agregar(form: NgForm): void {
    console.log(form.value); // Verifica los valores del formulario
    console.log(form.controls['nombre'].errors);

    let [value, valid] = [form.value, form.valid];
    if (!valid) {
      this.alertMessages.show(
        'Por favor, rellena el formulario correctamente',
        {
          cssClass:
            'alert-danger text-center d-flex justify-content-between m-1',
          timeOut: 3000,
        }
      );
    } else {
      //Agregar el nuevo cliente
    }
  }
}
