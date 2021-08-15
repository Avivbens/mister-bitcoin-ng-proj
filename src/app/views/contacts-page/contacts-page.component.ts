import { Component, OnInit } from '@angular/core'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss']
})
export class ContactPageComponent implements OnInit {
    public contacts: any = null
    public term = ''

    constructor(private contactService: ContactService) { }

    ngOnInit(): void {
        this.setup()
    }

    onSetFilter() {
        this.setup()
    }

    setup() {
        this.contactService.loadContacts({ term: this.term })
        this.contacts = this.contactService.contacts$

        // getting the data from observable
        this.contacts = this.contacts.source._value
    }

    goBack() {
        // TODO
    }
}
