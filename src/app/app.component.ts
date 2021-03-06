import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'mister-bitcoin';

    page: any = 'home'


    onChangePage(page: Event) {
        this.page = page
    }
}
