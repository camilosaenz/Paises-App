import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.css'],
})
export class PaisTablaComponent implements OnInit {
  constructor(private paisService: PaisService) {}

  @Input() paises: Country[] = [];
  hayError: boolean = false;

  ngOnInit(): void {}
}
