import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModules } from './material.module';

import { AppRoutingModule } from './routing.module';
import { TestService, HttpService, PersonService } from './_services/index.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InsideContentComponent } from './inside_content/inside_content.component';
import { SideBarComponent } from './_directives/side_bar/sidebar.component';
import { AddPersonComponent } from './add_person/add_person.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// mock backend
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';
import {fakeBackendProvider} from './_mock_backend/mock_backend.service';


@NgModule({
  entryComponents: [
    AddPersonComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModules
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    HomeComponent,
    InsideContentComponent,
    SideBarComponent,
    AddPersonComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    TestService,
    HttpService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
