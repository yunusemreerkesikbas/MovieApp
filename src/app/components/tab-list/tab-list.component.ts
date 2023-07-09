import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from '@models/TabModel';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css'],
})
export class TabListComponent {
  @Input() tabs: Tab[] = [];
  @Output() tabChange: EventEmitter<string> = new EventEmitter<string>();

  activeTab: string = '';

  onTabChange(tabId: string) {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }
}
