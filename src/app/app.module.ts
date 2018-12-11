import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactsService } from 'src/services/contacts.service';
import {FormsModule} from "@angular/forms";
import { NewContactComponent } from './new-contact/new-contact.component';

const AppRoutes:Routes=[
  { path:'about',component: AboutComponent },
  { path:'contacts',component: ContactsComponent },
  { path:'newcontact',component: NewContactComponent },
  { path:'',redirectTo: '/about',pathMatch: 'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    AboutComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
