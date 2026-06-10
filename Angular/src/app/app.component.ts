import { Component } from '@angular/core';
import { DxListModule } from 'devextreme-angular/ui/list';
import { tasks } from './data';

@Component({
    selector: 'app-root',
    imports: [DxListModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks = tasks;
}
