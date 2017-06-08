import { Component, Input, Output, EventEmitter } from '@angular/core'
//<img [src]="event?.imageUrl" height="80px">
@Component({
    selector:'event-thumbnail',
    template:`
        <div  [routerLink]="['/public',event.id]" class="well hoverwell thumbnail">
            
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event?.time}}
                <span class="label label-success" *ngSwitchCase="'8:00 am'">Early Start</span>
                <span class="label label-danger" *ngSwitchCase="'10:00 am'">Late Start</span>
                <span class="label label-info" *ngSwitchDefault>Normal Start</span>
            </div>
           
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                    <span>Location: {{event?.location?.address}}</span>
                    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <!--<button class="btn btn-primary" (click)="handleClickMe()">Click Me! </button>-->
        </div>
    `,
    styles:[`
        .green{
            color:green;
        }
        .bold{
            font-weight:bold;
        }
        .thumbnail{
            min-height:270px;
        }
        .pad-left{
            padding-left:10px;
        }
        .well{
            color:#bbb;
        }
        button{margin-top:20px;}
        `]
})

export class EventThumbnailComponent{
    @Input() event: any

    @Output() eventClick = new EventEmitter()


    handleClickMe(){
        this.eventClick.emit(this.event.name);
    }
 
    logfoo(){
        console.log('foo');
    }

    getStartTimeClass(){
        if(this.event.time == "8:00 am")
            return ['green', 'bold']
        else
            return []
    }
}