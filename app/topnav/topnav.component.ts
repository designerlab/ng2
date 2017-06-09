import { Component } from '@angular/core'

@Component({
    selector:'top-nav',
    templateUrl:'./app/topnav/topnav.component.html',
    styles:[
        `
        a{
            color : #ebebeb;
        }       
        `
        ]
})

export class TopNavComponent {
    edited = true;
  
    showConfBar(){
        this.edited = !(this.edited);
    }

}
