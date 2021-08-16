import { Injectable } from '@angular/core'
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router'
import { Contact } from '../models/contact.model'
import { ContactService } from '../services/contact.service'

@Injectable({
    providedIn: 'root'
})
export class ContactResolver implements Resolve<boolean> {

    constructor(private contactService: ContactService) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        const { id } = route.params
        const contact = await this.contactService.getContactById(id).toPromise()

        return contact
    }
}
