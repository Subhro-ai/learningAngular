import { Component, ElementRef, Output, ViewChild } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  faSearch = faSearch;
  searchText:string = "a";
  @Output()
  searchTextEmit: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') searchInputEl : ElementRef;

  onSearch() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextEmit.emit(this.searchText);
  }


}
