import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-sub-region',
  templateUrl: './por-sub-region.component.html',
  styleUrls: ['./por-sub-region.component.css'],
})
export class PorSubRegionComponent {
  regiones: string[] = [
    'south',
    'north',
    'central',
    'eastern',
    'southern',
    'western',
    'middle',
    'south america',
    'central america',
    'north america',
    'southern europe',
    'central europe',
    'eastern asia',
    'middle africa',
    'western africa',
    'northern africa',
    'eastern africa',
    'southern africa',
    'australia and new zealand',
  ];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paises = [];
    this.paisService.getSubRegion(region).subscribe((paises) => {
      this.paises = paises;
    });
  }

  changeRegionActiva(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
