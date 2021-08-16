import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

    public contact: Contact = null
    public subscription: Subscription = null

    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

    ngOnInit(): void {
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact

            this.contact ??= <Contact>{
                email: '',
                name: '',
                phone: '',
                balance: null,
                moves: []
            }
        })
    }

    goBack() {
        this.router.navigateByUrl('contact')
    }

    removeContact() {
        this.contactService.deleteContact(this.contact._id)
        this.router.navigateByUrl('contact')
    }

    saveContact() {
        this.contactService.saveContact(this.contact)
        this.router.navigateByUrl('contact')
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
