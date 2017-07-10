import { Component, OnInit, Input } from '@angular/core'
import {TranslateService} from '@ngx-translate/core';
@Component({
    selector: 'events-app',
    template: `
        <top-nav class="top-nav-style" (topNavClick)="getExpand($event)" [style.background]="getTheme()" [style.z-index]="this.zIndex" [style.height]="this.bHeight"></top-nav>
        <nav-bar class="nav-bar-style" [style.top]="this.bTop"></nav-bar>
        <breadcrumb  name="World" (userUpdated)="handleUserUpdated($event)" [ninja]="ninja" (onYell)="yell($event)"></breadcrumb>
        <router-outlet></router-outlet>
        <footer></footer>
    `,
    styles:[`
        .top-nav-style{
            width: 100% !important;
            height:70px;
            background: #1ebebc;
            position: fixed  !important;
            z-index: 10000;
            -webkit-transition-property: height; /* Safari */
            -webkit-transition-duration: 1s; /* Safari */
            transition-property: height;
            transition-duration: 1s;
        }
        footer{
            background:#666666;
        }
        .nav-bar-style{
            z-index: 10000;
            position: fixed;
            width: 100%;
            top: 30px;
            -webkit-transition-property: top; /* Safari */
            -webkit-transition-duration: 1s; /* Safari */
            transition-property: top;
            transition-duration: 1s;
        }

        `]
})
export class EventsAppComponent implements OnInit {
    childData:string
    translatedText: string
    supportedLanguages: any[]
    @Input() langChange: string;
      zIndex = "10000"
      bHeight = "70px"
      bTop = "35px" 

      constructor(private translate: TranslateService) {
        translate.addLangs(["en", "ms"]);
        translate.setDefaultLang('ms');
        translate.use('ms');
        // let browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|ms/) ? browserLang : 'ms');
    }

        yell(e){
            alert('am yelling')
        }
        handleUserUpdated(user) {
            debugger;
            // Handle the event
        }
      ngOnInit() {
        
        }
       getExpand(data) {
            if(data) {
                this.zIndex = "10000"
                this.bHeight = "70px"
                this.bTop = "35px"
                
            } else {
                this.zIndex = "10000"
                this.bHeight = "105px"
                this.bTop = "85px"
            }
        }

        getTheme(){
            return localStorage.getItem('themeColor')
        }

        ninja={
            name:'sridhar1'
        }
        
        public doSomething(date: any):void {
            console.log('Picked date: ', date);
        }

}