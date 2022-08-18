import { Component } from '@angular/core';
import { SelectEvent } from '@progress/kendo-angular-layout';

@Component({
  selector: 'my-app',
  template: `
  
  <kendo-tabstrip [ngStyle]="{'width': '400px'}">
  <kendo-tabstrip-tab
  *ngFor="let item of items let i=index"
  [title]="item.city"
  [selected]="i === 0"
  [disabled]="item.disabled"
>
                    <ng-template kendoTabContent>
                        <kendo-grid [data]="fetchData">
                        <kendo-grid-column field="title" title="ID"> </kendo-grid-column>
                        <kendo-grid-column field="description" title="Name"> </kendo-grid-column>
                        <kendo-grid-column field="tagline" title="Category"> </kendo-grid-column>
                        <kendo-grid-column field="data" title="Price"> </kendo-grid-column>
                        </kendo-grid>
                 </ng-template>
                 
    </kendo-tabstrip-tab>

    </kendo-tabstrip>
    `,
})
export class AppComponent {
  fetchData = [
    { title: 'saurabh', description: 'dd', tagline: 'tt', date: 'dd' },
    { title: 'aman', description: 'dd', tagline: 'tt', date: 'dd' },
    { title: 'jessica', description: 'dd', tagline: 'tt', date: 'dd' },
    { title: 'rosh', description: 'dd', tagline: 'tt', date: 'dd' },
  ];

  public items = [
    {
      disabled: false,
      city: 'Paris',
      temp: 17,
      weather: 'rainy',
    },
    {
      disabled: false,
      city: 'New York',
      temp: 29,
      weather: 'sunny',
    },
    {
      disabled: false,
      city: 'Sofia',
      temp: 23,
      weather: 'cloudy',
    },
    {
      disabled: false,
      city: 'London',
      temp: 19,
      weather: 'cloudy',
    },
  ];

  public onTabSelect(e: SelectEvent): void {
    console.log(e);
  }
}
