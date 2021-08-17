import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core'
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    user: User = null

    constructor(private userServie: UserService) { }

    ngOnInit(): void {
        this.user = this.userServie.currUser
    }

    onLogout() {
        this.userServie.logout()
    }
}
