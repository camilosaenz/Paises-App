import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Country, Languages } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css'],
})
export class VerPaisComponent implements OnInit {
  country: Country[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap((param) => this.paisService.getPaisPorAlpha(param['id'])),
    //     tap(console.log)
    //   )
    //   .subscribe((pais) => {
    //     this.pais = pais[0];
    //   });

    // Función para sacar la información del pais por medio del id.

    this.activatedRoute.params.subscribe(({ id }) => {
      this.paisService.getPaisPorAlpha(id).subscribe((pais) => {
        this.country = pais;
      });
    });
  }
}
