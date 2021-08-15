import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() pageChange = new EventEmitter();
    user: User = null

    constructor(private userServie: UserService) { }

    ngOnInit(): void {
        this.user = this.userServie.currUser
    }

    onChangePage(page: string) {
        this.pageChange.emit(page)
    }

    onLogout() {
        this.userServie.logout()
    }
}
