import { Injectable } from '@angular/core'
import { User } from '../models/user'

@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: User = JSON.parse(localStorage.loggedinUser || null)

    get currUser() {
        return this.user
    }

    updateUser(user: User) {
        this.user = {
            ...this.user,
            ...user
        }

        localStorage.loggedinUser = JSON.stringify(this.user)
    }

    login(credentials: { username: string, password?: string, fullname?: string }) {
        const { username, password, fullname } = credentials

        const loggedinUser = {
            username,
            // password,
            balance: 100,
            fullname: fullname ?? username
        }
        this.user = loggedinUser

        // const copyUser = JSON.parse(JSON.stringify(loggedinUser))
        // delete copyUser.password
        localStorage.loggedinUser = JSON.stringify(loggedinUser)
    }

    logout() {
        this.user = null
        localStorage.loggedinUser = JSON.stringify(null)
        location.reload()
    }
}
