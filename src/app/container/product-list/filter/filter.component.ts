import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number = 0;

  @Input()
  inStock:number = 0;

  @Input()
  outOfStock:number = 0;
  @Output()
  radioButtonChange: EventEmitter<string> = new EventEmitter<string>();

  selectedFilterButton: string = 'all';

  onRadioButtonChange() {
    console.log("FILTER CHANGED");
    this.radioButtonChange.emit(this.selectedFilterButton);
  }
}
