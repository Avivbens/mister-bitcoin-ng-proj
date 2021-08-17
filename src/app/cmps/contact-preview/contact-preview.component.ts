import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'app-contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPreviewComponent {

    @Input() contact: Contact
    constructor(private router: Router) { }

    selectContact() {
        this.router.navigateByUrl('details/' + this.contact._id)
    }

}
