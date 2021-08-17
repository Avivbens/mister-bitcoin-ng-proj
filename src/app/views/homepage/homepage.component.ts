import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/user'
import { BitcoinService } from 'src/app/services/bitcoin.service'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
    public user: User = null
    public currBitRate: number = null

    constructor(private userService: UserService, private bitcoinService: BitcoinService, private cd: ChangeDetectorRef) { }

    async ngOnInit() {
        // load curr user
        this.user = this.userService.currUser

        this.currBitRate = await this.bitcoinService.getRate()

        this.cd.markForCheck()
    }
}
