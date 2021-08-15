import { Component, OnInit } from '@angular/core'
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
    user: User = null

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        // load curr user
        this.user = this.userService.currUser
    }
}
