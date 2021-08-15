import { Component, Input, OnInit } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'app-contact-preview',
    templateUrl: './contact-preview.component.html',
    styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent {

    @Input() contact: Contact
    constructor() { }

    selectContact() {
        // TODO
    }

}
