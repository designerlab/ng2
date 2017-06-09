import { Routes } from '@angular/router'

import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    EventRouterActivator
} from './events/index'

import { Error404Component } from './error/404.component'
import { ContactComponent } from './header/contact.component'
import { FaqComponent } from './header/faq.component'
import { AboutusComponent } from './header/aboutus.component'
import { ManualComponent } from './header/manual.component'
import { EventListResolver } from './events/create-list-resolver.service'
import { EventRouterActivator } from './events/event-details/event-router-activator.service'

export const appRoutes:Routes = [
    {path: '404', component: Error404Component},
    {path: 'public/contact', component: ContactComponent},
    {path: 'public/faq', component: FaqComponent},
    {path: 'public/aboutus', component: AboutusComponent},
    {path: 'public/manual', component: ManualComponent},
    {path: 'public/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
    {path: 'public', component: EventsListComponent, resolve:{events: EventListResolver} },
    {path: 'public/:id', component: EventDetailsComponent, canActivate:[EventRouterActivator] },
    {path: '', redirectTo: '/public', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]