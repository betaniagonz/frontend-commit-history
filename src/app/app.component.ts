import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <app-header />
    <router-outlet></router-outlet>
    `,
    imports: [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'gitHubViewer';
}
