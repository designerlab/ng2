import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './error/404.component'
import { ContactComponent } from './pages/contact.component'
import { EventListResolver } from './events/create-list-resolver.service'
import { EventRouterActivator } from './events/event-details/event-router-activator.service'

export const appRoutes:Routes = [
    {path: '404', component: Error404Component},
    {path: 'public/contact', component: ContactComponent},
    {path: 'public/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
    {path: 'public', component: EventsListComponent, resolve:{events: EventListResolver} },
    {path: 'public/:id', component: EventDetailsComponent, canActivate:[EventRouterActivator] },
    {path: '', redirectTo: '/public', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]