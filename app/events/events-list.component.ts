import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    template: `
    <slider></slider>
    <div class="container">
     <h1>Upcoming Angular 2 Events</h1>
     <hr/>
     <div class="row">
        <div  *ngFor="let event of events" class="col-md-5">
            <event-thumbnail #thumbnail (click)="handleEventClicked(this.event)" (eventClick)="handleEventClicked($event)" [event]="event"></event-thumbnail>
        </div>
     </div>
    </div>
`,
    styles:[`
        slider{
            background: #a7a495;
            width: 100%;
            display: block;
        }
    `]
})
export class EventsListComponent implements OnInit{
    events:any[]
    constructor(private eventService: EventService, private toastr:ToastrService){
    
    }

    ngOnInit(){
         this.events = this.eventService.getEvents();
    }

    handleEventClicked(data){
        this.toastr.success(data.name);
    }
}