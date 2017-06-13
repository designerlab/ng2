import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
        <top-nav class="top-nav-style" (topNavClick)="getExpand($event)" [style.z-index]="this.zIndex" [style.height]="this.bHeight"></top-nav>
        <nav-bar class="nav-bar-style" [style.top]="this.bTop"></nav-bar>
        <div class="xtra-space"></div>
        <router-outlet></router-outlet>

    `,
    styles:[`
        .top-nav-style{
            width: 100% !important;
            height:70px;
            background: #1ebebc  !important;
            position: fixed  !important;
            z-index: 10000;
            -webkit-transition-property: height; /* Safari */
            -webkit-transition-duration: 1s; /* Safari */
            transition-property: height;
            transition-duration: 1s;
        }

        .nav-bar-style{
            z-index: 999999;
            position: fixed;
            width: 100%;
            top: 30px;
            -webkit-transition-property: top; /* Safari */
            -webkit-transition-duration: 1s; /* Safari */
            transition-property: top;
            transition-duration: 1s;
        }

        .xtra-space{
            height:70px;
            position:relative;
        }
        `]
})
export class EventsAppComponent{
      zIndex = "10000"
      bHeight = "70px"
      bTop = "30px"

       getExpand(data) {
            if(data) {
                this.zIndex = "10000"
                this.bHeight = "70px"
                this.bTop = "30px"
                
            } else {
                this.zIndex = "99999"
                this.bHeight = "90px"
                this.bTop = "0px"
            }
        }

}