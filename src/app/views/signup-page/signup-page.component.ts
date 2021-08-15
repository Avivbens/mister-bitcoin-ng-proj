import { Component, EventEmitter, Output } from '@angular/core'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

    @Output() pageChange = new EventEmitter();

    public username: ''
    public password: ''

    constructor(private userService: UserService) { }

    signup() {
        this.userService.login({ username: this.username, password: this.password })
        this.pageChange.emit('home')
    }
}
