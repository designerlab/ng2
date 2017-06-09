import { Component } from '@angular/core'

@Component({
    selector:'top-nav',
    templateUrl:'./app/topnav/topnav.component.html',
    styles:[
        `.top-bar {
            margin: 0 4% 0.5% 4%;
        }
        .menu_top{
            margin: 10px 0px 0px 105px;
        } 
        a{
            color : #ebebeb;
        }       
        `
        ]
})

export class TopNavComponent{
    public edited = true;
    topNavEvent(){
        alert('clicked!!')
    }
    showConfBar(){
        // alert(this.edited +',' + !(this.edited));
        this.edited = !(this.edited);
    }
}