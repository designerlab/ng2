import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
        <top-nav></top-nav>
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class EventsAppComponent{
    
}