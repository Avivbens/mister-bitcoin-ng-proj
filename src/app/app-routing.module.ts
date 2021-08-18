import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoggedinUserGuard } from './guards/loggedin-user.guard'
import { ContactResolver } from './resolvers/contact.resolver'
import { ChartsComponent } from './views/charts/charts.component'
import { ContactDetailsComponent } from './views/contact-details/contact-details.component'
import { ContactEditComponent } from './views/contact-edit/contact-edit.component'
import { ContactPageComponent } from './views/contacts-page/contacts-page.component'
import { HomepageComponent } from './views/homepage/homepage.component'
import { SignupPageComponent } from './views/signup-page/signup-page.component'

const routes: Routes = [
    { path: 'details/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolver }, canActivate: [LoggedinUserGuard] },
    { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver }, canActivate: [LoggedinUserGuard] },
    { path: 'add', component: ContactEditComponent, canActivate: [LoggedinUserGuard] },
    { path: 'contact', component: ContactPageComponent, canActivate: [LoggedinUserGuard] },

    { path: 'signup', component: SignupPageComponent },
    { path: 'login', redirectTo: 'signup' },

    { path: 'charts', component: ChartsComponent },
    { path: '', component: HomepageComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
