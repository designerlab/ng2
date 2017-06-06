import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <div>
     <h1>Upcoming Angular 2 Events</h1>
     <hr/>
     <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    </div>
    <button class="btn btn-success" (click)="thumbnail.logfoo()">Click Me!</button>   
`
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name:'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location:{
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data){
        console.log('received:', data);
    }
}