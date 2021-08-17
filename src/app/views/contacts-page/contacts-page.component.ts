import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'app-contacts-page',
    templateUrl: './contacts-page.component.html',
    styleUrls: ['./contacts-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent implements OnInit {
    public contacts$: Contact[] = null
    public term = ''

    private subscription: Subscription = null

    constructor(private contactService: ContactService, private router: Router) { }

    ngOnInit(): void {
        this.contactService.loadContacts({ term: this.term })
        // this.contacts$ = this.contactService.contacts$ // use async pipe on the DOM to use it

        this.subscription = this.contactService.contacts$.subscribe(contacts => this.contacts$ = contacts)
    }

    onSetFilter() {
        this.contactService.loadContacts({ term: this.term })
    }

    addContact() {
        this.router.navigateByUrl('add')
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
