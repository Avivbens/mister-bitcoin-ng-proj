import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactResolver } from './resolvers/contact.resolver'
import { ContactDetailsComponent } from './views/contact-details/contact-details.component'
import { ContactEditComponent } from './views/contact-edit/contact-edit.component'
import { ContactPageComponent } from './views/contacts-page/contacts-page.component'
import { HomepageComponent } from './views/homepage/homepage.component'
import { SignupPageComponent } from './views/signup-page/signup-page.component'

const routes: Routes = [
    // TODO - add guards
    { path: 'details/:id', component: ContactDetailsComponent, resolve: { contact: ContactResolver } },
    { path: 'edit/:id', component: ContactEditComponent, resolve: { contact: ContactResolver } },
    { path: 'add', component: ContactEditComponent },

    { path: 'contact', component: ContactPageComponent },

    { path: 'signup', component: SignupPageComponent },
    // { path: 'charts', component: contacrCharts },
    { path: '', component: HomepageComponent },

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule { }


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
