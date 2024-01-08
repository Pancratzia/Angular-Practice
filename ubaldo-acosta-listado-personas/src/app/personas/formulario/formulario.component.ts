import { Component, ElementRef, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string= '';
  apellidoInput: string='';

  constructor(private personaService: PersonasService, private router:Router){
    this.personaService.saludar.subscribe(
      (nombreCompleto:string) => alert(`¡Hola, ${nombreCompleto}!`)
    )
  }

  onGuardarPersona() : void {
    let newPersona = new Persona(this.nombreInput.toUpperCase(), this.apellidoInput.toUpperCase());
    this.personaService.agregarPersona(newPersona);
    this.router.navigate(['/personas']);

  }



}
