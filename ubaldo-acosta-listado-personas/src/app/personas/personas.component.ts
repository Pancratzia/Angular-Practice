import { Component } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  personas: Persona[] = [];

  constructor(private personasService: PersonasService){}

  ngOnInit(): void {
    this.personas = this.personasService.personas;
  }

}
