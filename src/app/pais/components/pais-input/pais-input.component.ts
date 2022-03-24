import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css'],
})
export class PaisInputComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    this.debouncer.pipe(debounceTime(100)).subscribe((valor) => {
      this.onDebonce.emit(valor);
    });
  }
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebonce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  termino: string = '';

  debouncer: Subject<string> = new Subject();

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
