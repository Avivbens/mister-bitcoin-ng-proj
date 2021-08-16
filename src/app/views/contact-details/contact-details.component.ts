import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    public contact: Contact = null
    public subscription: Subscription = null

    constructor(private router: Router, private route: ActivatedRoute) { }


    async ngOnInit(): Promise<void> {
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact
        })
    }

    editContact() {
        this.router.navigateByUrl('edit/' + this.contact._id)
    }

    goBack() {
        this.router.navigateByUrl('contact')
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
