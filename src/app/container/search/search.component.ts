import { Component, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  faSearch = faSearch;
  searchText:string = "";
  @Output()
  searchTextEmit: EventEmitter<string> = new EventEmitter<string>();

  onSearch(inputEL : HTMLInputElement) {
    this.searchText = inputEL.value;
    this.searchTextEmit.emit(this.searchText);
  }


}
