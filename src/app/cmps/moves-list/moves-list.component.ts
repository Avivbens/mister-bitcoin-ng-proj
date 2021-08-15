import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Move } from 'src/app/models/move'
import { BitcoinService } from 'src/app/services/bitcoin.service'

@Component({
    selector: 'app-moves-list',
    templateUrl: './moves-list.component.html',
    styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
    @Input() fullView: boolean
    @Input() movesProp: Move[]


    public rate: Observable<number> = null;

    constructor(private bitcoinService: BitcoinService) { }

    get moves(): Move[] {
        const moves = JSON.parse(JSON.stringify(this.movesProp ?? null))
        moves?.sort((m1: Move, m2: Move): number => +m2.at - +m1.at)

        return moves
    }

    async ngOnInit(): Promise<any> {
        this.rate = await this.bitcoinService.getRate()
    }
}
