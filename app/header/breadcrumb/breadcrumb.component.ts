import { Component, Input, Output, EventEmitter, OnInit, AfterViewChecked } from '@angular/core'
import { BreadcrumbService } from './breadcrumb.service'

@Component({
    selector: 'breadcrumb',
    template: `
        <div class="xtra-space container-fluid">
            <div class="container">
                <div class="breadCrumb">
                <h1>Test</h1>
                <h1>{{breadcrumb.name}}</h1>
                
                </div>
            </div>
        </div>
    `,
    styles:[`
    
        .xtra-space{
            min-height:100px;
            display:block;
            position:relative;
            background:#a7a495;
        }

        .xtra-space .breadCrumb{
            padding-top:80px;
        }
    `]
})

export class BreadcrumbComponent implements OnInit{
    
    _greetMessage : string
    breadcrumb:any
    @Output() userUpdated = new EventEmitter();
    constructor(private breadcrumbService:BreadcrumbService){
        this.userUpdated.emit("value");
    }

    ngOnInit(){
        this.breadcrumb = this.breadcrumbService.getBreadcrumb()
    }

    @Input() breadcrumbtitle: string;
     @Input() name: string;
     @Input() ninja;
     @Input()
        set greetMessage(message : string ){
            this._greetMessage = message+ " manipulated at child component"; 
        }
        get greetmessage(){
            return this._greetMessage;
        }

    
}
    