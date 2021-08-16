import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'app-transfer-fund',
    templateUrl: './transfer-fund.component.html',
    styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {

    @Input() contact: Contact
    @Output() reloadContact = new EventEmitter()

    public amount: number = null

    constructor(private contactService: ContactService) { }


    async transfer() {
        await this.contactService.transferTo(this.contact._id, this.amount)
        this.amount = null

        this.reloadContact.emit()
    }
}
