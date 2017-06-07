import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    template: `
    <div class="container">
     <h1>Upcoming Angular 2 Events</h1>
     <hr/>
     <div class="row">
        <div  *ngFor="let event of events" class="col-md-5">
            <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event"></event-thumbnail>
        </div>
     </div>
    </div>
`
})
export class EventsListComponent implements OnInit{
    events:any[]
    constructor(private eventService: EventService){
    
    }

    ngOnInit(){
         this.events = this.eventService.getEvents();
    }

    handleEventClicked(data){
        console.log('received:', data);
    }
}