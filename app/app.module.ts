import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouterActivator,
    EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import { NavBarComponent } from './header/nav/navbar.component'
import { SliderService } from './slider/shared/slider.service'
import { SliderComponent } from './slider/slider.component'
import { TopNavComponent } from './header/topnav/topnav.component'
import { ToastrService } from './common/toastr.service'
import { Error404Component } from './error/404.component'
// import { ContactComponent } from './header/contact.component'
// import { FaqComponent } from './header/faq.component'
// import { AboutusComponent } from './header/aboutus.component'
// import { ManualComponent } from './header/manual.component'
import { TopNavService } from './header/topnav/topnav.service'
import { AuthService } from './user/auth.service' 
import { appRoutes } from './routes'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
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
        // ContactComponent,
        // FaqComponent,
        // AboutusComponent,
        // ManualComponent
        ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        SliderService,
        ToastrService,
        EventRouterActivator,
        TopNavService,
        EventListResolver,
        AuthService,
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