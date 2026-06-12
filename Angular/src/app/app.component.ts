import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DxListModule } from 'devextreme-angular/ui/list';
import { tasks } from './data';

@Component({
    selector: 'app-root',
    imports: [DxListModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks = tasks;
}
