import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomepageComponent } from './views/homepage/homepage.component'
import { HeaderComponent } from './cmps/header/header.component'
import { SignupPageComponent } from './views/signup-page/signup-page.component'
import { FormsModule } from '@angular/forms'
import { ContactListComponent } from './cmps/contact-list/contact-list.component'
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component'
import { ContactPageComponent } from './views/contacts-page/contacts-page.component'
import { ContactDetailsComponent } from './views/contact-details/contact-details.component'
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component'
import { MovesListComponent } from './cmps/moves-list/moves-list.component'
import { HttpClientModule } from '@angular/common/http';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component'

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        HeaderComponent,
        SignupPageComponent,
        ContactListComponent,
        ContactPreviewComponent,
        ContactPageComponent,
        ContactDetailsComponent,
        TransferFundComponent,
        MovesListComponent,
        ContactEditComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
