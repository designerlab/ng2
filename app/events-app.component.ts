import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'events-app',
    template: `
        <top-nav class="top-nav-style"></top-nav>
        <nav-bar class="nav-bar-style"></nav-bar>
        <div class="xtra-space"></div>
        <router-outlet></router-outlet>
<<<<<<< HEAD
        
    `
=======
    `,
    styles:[`
        .top-nav-style{
            width: 100% !important;
            height:70px;
            background: #1ebebc  !important;
            position: fixed  !important;
            z-index: 99999  !important;
        }

        .nav-bar-style{
            z-index: 999999;
            position: fixed;
            width: 100%;
            top: 30px;
        }

        .xtra-space{
            height:70px;
            position:relative;
        }
        `]
>>>>>>> 1cc95944a4a7a476556cd2265e699702eac14259
})
export class EventsAppComponent{
    
}