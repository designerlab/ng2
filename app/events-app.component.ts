import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
        <nav-bar></nav-bar>
        <slider></slider>
        <events-list></events-list>
    `,
    styles:[`
        slider{
            background: #a7a495;
            width: 100%;
            display: block;
        }
    `]
})
export class EventsAppComponent{
    
}