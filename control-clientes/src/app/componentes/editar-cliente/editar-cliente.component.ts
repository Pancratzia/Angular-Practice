import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertMessagesService } from 'jjwins-angular-alert-messages';
import { Cliente } from 'src/app/modelos/cliente.model';
import { ClienteServicio } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  id: string;

  constructor(
    private clienteServicio: ClienteServicio,
    private alertMessages: AlertMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteServicio.getcliente(this.id).subscribe((cliente) => {
      if (cliente) {
        this.cliente = cliente;
      }
    })
  }

  guardar(form : NgForm){

    const {value, valid} = form;
    if(!valid) {
      this.alertMessages.show(
        'Por favor, rellena el formulario correctamente',
        {
          cssClass:
            'alert-danger text-center d-flex justify-content-between m-1',
          timeOut: 3000,
        }
      );
    } else {
      value.id = this.id;
      this.clienteServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }

  }

  eliminar(){
    if(confirm('¿Estás seguro de eliminar este cliente?')){
      this.clienteServicio.eliminarCliente(this.cliente);
      this.router.navigate(['/']);
    }
  }

}
