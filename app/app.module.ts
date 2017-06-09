import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './header/nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { SliderService } from './slider/shared/slider.service'
import { SliderComponent } from './slider/slider.component'
import { TopNavComponent } from './header/topnav/topnav.component'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './error/404.component'
import { ContactComponent } from './header/contact.component'
import { FaqComponent } from './header/faq.component'
import { AboutusComponent } from './header/aboutus.component'
import { ManualComponent } from './header/manual.component'
import { EventRouterActivator } from './events/event-details/event-router-activator.service'
import { TopNavService } from './header/topnav/topnav.service'
import {EventListResolver } from './events/create-list-resolver.service'
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
        ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        SliderComponent,
        TopNavComponent,
        EventDetailsComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        ContactComponent,
        FaqComponent,
        AboutusComponent,
        ManualComponent],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        SliderService,
        ToastrService,
        EventRouterActivator,
        TopNavService,
        EventListResolver,
        {provide:'canDeactivateCreateEvent', useValue:checkDirtyState}
        ]
})
export class AppModule{

}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event, do you really want to cancel?')
    return true;
}