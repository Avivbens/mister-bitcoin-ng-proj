import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Contact } from 'src/app/models/contact.model'
import { ContactService } from 'src/app/services/contact.service'

@Component({
    selector: 'app-transfer-fund',
    templateUrl: './transfer-fund.component.html',
    styleUrls: ['./transfer-fund.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferFundComponent {

    @Input() contact: Contact
    @Output() transferFund = new EventEmitter()

    public amount: number = null


    async transfer() {
        this.transferFund.emit({ contactId: this.contact._id, amount: this.amount })
        this.amount = null
    }
}
