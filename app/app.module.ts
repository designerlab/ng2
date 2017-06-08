import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { SliderService } from './slider/shared/slider.service'
import { SliderComponent } from './slider/slider.component'
import { TopNavComponent } from './topnav/topnav.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        SliderComponent,
        TopNavComponent],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        SliderService
        ]
})
export class AppModule{

}