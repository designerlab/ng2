import { Component, Input, Output, EventEmitter, OnInit, AfterViewChecked } from '@angular/core'
import { BreadcrumbService } from './breadcrumb.service'

@Component({
    selector: 'breadcrumb',
    template: `
        <div class="xtra-space container-fluid">
            <div class="container">
                <div class="breadCrumb">
                <h1 *ngIf="!isValid">{{breadcrumb.name}}</h1>
                <h1 *ngIf="isValid">{{breadcrumb.name | translate}}</h1>
                </div>
            </div>
        </div>
    `,
    styles:[`
    
        .xtra-space {
            min-height:100px;
            display:block;
            position:relative;
            background:#a7a495;
        }

        .xtra-space .breadCrumb {
            padding-top:80px;
        }
    `]
})

export class BreadcrumbComponent implements OnInit{
    
    _greetMessage : string
    breadcrumb:any
    isValid:any
    
    constructor(private breadcrumbService:BreadcrumbService){
    
    }

    ngOnInit(){
        this.breadcrumb = this.breadcrumbService.getBreadcrumb()
        this.isValid = this.breadcrumbService.getValid()
    }
    
}
    