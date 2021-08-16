import { Injectable } from '@angular/core'
import {
    Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router'
import { ContactService } from '../services/contact.service'

@Injectable({
    providedIn: 'root'
})
export class ContactResolver implements Resolve<boolean> {

    constructor(private contactService: ContactService) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        const { id } = route.params
        const contact = this.contactService.getContactById(id).toPromise()

        return contact
    }
}
