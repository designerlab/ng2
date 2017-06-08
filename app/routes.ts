import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'

export const appRoutes:Routes = [
    {path: 'public', component: EventsListComponent },
    {path: 'public/:id', component: EventDetailsComponent },
    {path: '', redirectTo: '/public', pathMatch: 'full'}
]