import { Component, Input, Output, EventEmitter } from '@angular/core'
import { AuthService } from '../../user/auth.service'

@Component({
    selector:'top-nav',
    templateUrl:'./app/header/topnav/topnav.component.html',
    styles:[
        `
        a{
            color : #ebebeb;
        }
        
        .top-nav{
            padding-top: 0px;
        }
        
        
        `
        ]
})

export class TopNavComponent {
    
    @Input() edited = true
    @Output() topNavClick = new EventEmitter()
  
    constructor(private auth:AuthService){

    }
    showConfBar(){
        this.edited = !(this.edited)
        this.topNavClick.emit(this.edited);
    }
    
    

}
