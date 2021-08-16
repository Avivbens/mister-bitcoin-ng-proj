import { Component, Input, OnInit } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'

@Component({
    selector: 'app-transfer-fund',
    templateUrl: './transfer-fund.component.html',
    styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent {

    @Input() contact: Contact

    public amount: number = null


    transfer() {
        // TODO - transfer money in service
    }
}
