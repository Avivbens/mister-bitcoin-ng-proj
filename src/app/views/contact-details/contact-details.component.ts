import { Component, Input, OnInit } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    @Input() contact: Contact

    ngOnInit(): void {
        // TODO REMOVE this when have router
        this.contact = {
            "_id": "5a56640269f443a5d64b32ca",
            "name": "Ochoa Hyde",
            "email": "ochoahyde@renovize.com",
            "phone": "+1 (968) 593-3824"
        }
    }

    editContact() {
        // TODO
    }

    goBack() {
        // TODO
    }

}
