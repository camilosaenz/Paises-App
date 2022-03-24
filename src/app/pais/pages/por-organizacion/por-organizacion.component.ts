import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { Organizacion } from '../../interfaces/organizacion.interface';

@Component({
  selector: 'app-por-organizacion',
  templateUrl: './por-organizacion.component.html',
  styleUrls: ['./por-organizacion.component.css'],
})
export class PorOrganizacionComponent {
  organizaciones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  organizacionActiva: string = '';
  paises: Organizacion[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(organizacion: string) {
    this.organizacionActiva = organizacion;
    this.paises = [];
    this.paisService.getOrganizacion(organizacion).subscribe((paises) => {
      this.paises = paises;
    });
  }

  changeRegionActiva(region: string): string {
    return region === this.organizacionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
