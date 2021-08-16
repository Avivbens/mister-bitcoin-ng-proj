import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'app-contact-edit',
    templateUrl: './contact-edit.component.html',
    styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

    public contact: Contact = null
    public subscription: Subscription = null

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact
        })
    }

    goBack() {
        this.router.navigateByUrl('contact')
    }
    removeContact() {
        // TODO - remove contact with service
    }
    saveContact() {
        // TODO - save changes on contact with service
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe()
    }
}
