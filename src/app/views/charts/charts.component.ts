import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core'
import { BitcoinService } from 'src/app/services/bitcoin.service'

@Component({
    selector: 'charts-app',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartsComponent {

    constructor(private bitcoinService: BitcoinService, private cd: ChangeDetectorRef) { }

    public marketPriceData: any = null
    public confirmedTransactionsData: any = null

    public marketPrice: any = null
    public confirmedTransactions: any = null

    async ngOnInit() {
        this.marketPriceData = await this.bitcoinService.getMarketPrice()
        this.confirmedTransactionsData = await this.bitcoinService.getConfirmedTransactions()

        this.marketPrice = {
            title: 'Market Price',
            type: 'LineChart',
            data: this.marketPriceData,
            options: {
                hAxis: {
                    title: 'Time'
                },
                vAxis: {
                    title: 'Cost'
                },
            },
            width: 1000,
            height: 400
        }

        this.confirmedTransactions = {
            title: 'Confirmed Transactions',
            type: 'LineChart',
            data: this.confirmedTransactionsData,
            options: {
                hAxis: {
                    title: 'Time'
                },
                vAxis: {
                    title: 'Transfers'
                },
            },
            width: 1000,
            height: 400
        }

        this.cd.markForCheck()
    }
}