import { Component, Input, OnInit } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

    @Input() contactProp: Contact

    public contact: Contact = null

    ngOnInit(): void {
        this.contact = JSON.parse(JSON.stringify(this.contactProp ?? null))
    }


    goBack() {
        // TODO
    }
    removeContact() {
        // TODO
    }
    saveContact() {
        // TODO
    }

}
