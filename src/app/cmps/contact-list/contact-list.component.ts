import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {
    @Input() contacts: any
}
