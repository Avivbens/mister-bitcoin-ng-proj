import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, tap } from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})
export class BitcoinService {
    constructor(private http: HttpClient) { }

    async getRate() {
        return this.http.get<{ answer: string }>('https://blockchain.info/tobtc?currency=USD&value=1')
            .pipe(
                map(res => +res.answer)
            )
        // const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        // return res.data
    }

    async getValueCost(coins: number) {
        return this.http.get<{ answer: string }>('https://blockchain.info/tobtc?currency=USD&value=1')
            .pipe(
                map(res => coins / +res.answer)
            )

        // const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        // return coins / res.data
    }

    async getMarketPrice() {
        const helper = JSON.parse(sessionStorage.helper || null)?.map((h: { x: number, y: number }) => h.y)
        if (helper) return helper

        return this.http.get<{ answer: string }>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .pipe(
                map(res => res.answer),
                tap(console.log)
            )

        // console.log('server fetch')
        // const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        // sessionStorage.helper = JSON.stringify(res.data.values.slice(75))
        // return res.data.values.slice(75).map(h => h.y)
    }

    async getConfirmedTransactions() {
        const helper2 = JSON.parse(sessionStorage.helper2 || null)?.map((h: { x: number, y: number }) => h.y)
        if (helper2) return helper2

        return this.http.get<{ answer: string }>('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
            .pipe(
                map(res => res.answer),
                tap(console.log)
            )

        // console.log('server fetch')
        // const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
        // sessionStorage.helper2 = JSON.stringify(res.data.values.slice(75))
        // return res.data.values.slice(75).map(h => h.y)
    }
}
