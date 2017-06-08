import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './create-event.component'
import { Error404Component } from './error/404.component'
import { DummyComponent } from './dummy/dummy.component'
import { EventRouterActivator } from './events/event-details/event-router-activator.service'

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent'] },
    {path: 'events', component: EventsListComponent },
    {path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouterActivator] },
    {path: '404', component: Error404Component},
    {path: 'dummy', component: DummyComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'}
]