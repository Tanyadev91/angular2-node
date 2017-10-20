import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { InsideContentComponent } from './inside_content/inside_content.component';
import { AddPersonComponent } from './add_person/add_person.component';

import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'add_person', component: AddPersonComponent },
    { path: 'categories', component: InsideContentComponent , children: [
      { path: '', redirectTo: 'filter', pathMatch: 'full'},
      { path: 'filter', component: ContactComponent},
      { path: 'map', component: RegisterComponent },
    ]},
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
