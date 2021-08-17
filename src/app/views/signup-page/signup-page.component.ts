import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service'

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupPageComponent {

    public username: ''
    public password: ''

    constructor(private userService: UserService, private router: Router) { }

    async signup() {
        await this.userService.login({ username: this.username, password: this.password })
        await this.router.navigateByUrl('')
        location.reload()
    }
}
