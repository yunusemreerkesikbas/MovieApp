import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() filterTextChange: EventEmitter<string> = new EventEmitter<string>();
  filterText: string = '';

  onFilterTextChange() {
    this.filterTextChange.emit(this.filterText);
  }

  ngOnInit(): void {}
}
