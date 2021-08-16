import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'app-contact-details',
    templateUrl: './contact-details.component.html',
    styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

    public contact: Contact = null
    public subscription: Subscription = null

    constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }


    async ngOnInit(): Promise<void> {
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact
        })
    }

    // async ngOnInit(): Promise<void> {
    //     this.subscription = this.route.data.subscribe(data => {
    //         this.subscription2 = data.contact.subscribe((contact: any) => {
    //             this.contact = contact
    //         })
    //     })
    // }

    onReload() {
        this.router.navigateByUrl('contact')
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
