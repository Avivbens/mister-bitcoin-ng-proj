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
            .toPromise()
            .then(res => {
                return + res
            })
        // const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=1`)
        // return res.data
    }

    async getMarketPrice() {
        const helper = JSON.parse(sessionStorage.helper || null)
        if (helper) return helper

        console.log('server fetch')
        return this.http.get<{ answer: string }>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .toPromise()
            .then(res => {
                // @ts-ignore
                const values = res.values.map(value => {
                    return [null, +value.y]
                })

                console.log(`values`, values)
                sessionStorage.helper = JSON.stringify(values)
                return values
            })


        // console.log('server fetch')
        // const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        // sessionStorage.helper = JSON.stringify(res.data.values.slice(75))
        // return res.data.values.slice(75).map(h => h.y)
    }

    async getConfirmedTransactions() {
        const helper2 = JSON.parse(sessionStorage.helper2 || null)
        if (helper2) return helper2

        return this.http.get<{ answer: string }>('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
            .toPromise()
            .then(res => {
                // @ts-ignore
                const values = res.values.map(value => {
                    return [null, +value.y]
                })

                console.log(`values`, values)
                sessionStorage.helper2 = JSON.stringify(values)
                return values
            })

        // console.log('server fetch')
        // const res = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
        // sessionStorage.helper2 = JSON.stringify(res.data.values.slice(75))
        // return res.data.values.slice(75).map(h => h.y)
    }
}
