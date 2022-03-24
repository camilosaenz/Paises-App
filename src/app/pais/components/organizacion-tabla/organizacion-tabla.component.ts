import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Organizacion } from '../../interfaces/organizacion.interface';

@Component({
  selector: 'app-organizacion-tabla',
  templateUrl: './organizacion-tabla.component.html',
  styleUrls: ['./organizacion-tabla.component.css'],
})
export class OrganizacionTablaComponent {
  constructor(private paisService: PaisService) {}

  @Input() organizaciones: Organizacion[] = [];
  hayError: boolean = false;
}
