import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  //@Output() personaCreada = new EventEmitter<Persona>();

  nombreInput: string= '';
  apellidoInput: string='';
  index:number;
  modoEdicion:number;

  constructor(private personaService: PersonasService, private router:Router,
    private route: ActivatedRoute){
    this.personaService.saludar.subscribe(
      (nombreCompleto:string) => alert(`¡Hola, ${nombreCompleto}!`)
    )
  }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

    if(this.modoEdicion !== null && this.modoEdicion === 1){
      let persona : Persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona() : void {
    let newPersona = new Persona(this.nombreInput.toUpperCase(), this.apellidoInput.toUpperCase());
    if(this.modoEdicion !== null && this.modoEdicion === 1){
      this.personaService.modificarPersona(this.index, newPersona);
    }else{
      this.personaService.agregarPersona(newPersona);
    }
    this.router.navigate(['/personas']);

  }

  eliminarPersona(){
    if(this.index != null){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['/personas']);
  }

}
