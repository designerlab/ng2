import { Component, OnInit } from '@angular/core'
//import { TranslateService } from 'ng2-translate'
import {TranslateService} from '@ngx-translate/core';
@Component({
    selector: 'events-app',
    template: `
        <top-nav class="top-nav-style" (topNavClick)="getExpand($event)" [style.z-index]="this.zIndex" [style.height]="this.bHeight"></top-nav>
        <nav-bar class="nav-bar-style" [style.top]="this.bTop"></nav-bar>
        <div class="xtra-space container-fluid">
            <div class="container">
                <div class="breadCrumb">
                    <h1>Title</h1>
                <div>
  
        <!--reanslate with service-->
        <p>
            Translate with Service: <strong>{{ translatedText }}</strong>
        </p>
    </div>
                    <span>Home/somepage</span>
                </div>
            </div>
        </div>
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
            z-index: 10000;
            position: fixed;
            width: 100%;
            top: 30px;
            -webkit-transition-property: top; /* Safari */
            -webkit-transition-duration: 1s; /* Safari */
            transition-property: top;
            transition-duration: 1s;
        }

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
export class EventsAppComponent implements OnInit {
    param = {value: 'world'};
    translatedText: string
    supportedLanguages: any[]

      zIndex = "10000"
      bHeight = "70px"
      bTop = "30px" 

      constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

      ngOnInit() {
        // standing data
        // this.translate.addLangs(['en', 'ms'])
        // this.translate.setDefaultLang('en')

        // let browserlang = this.translate.getBrowserLang();
        // this.translate.use(browserlang.match(/en|ms/) ? browserlang : 'en')

        this.supportedLanguages = [
        { display: 'English', value: 'en' },
        { display: 'Malay', value: 'ms' },
        ];

        // set current langage
    }
       getExpand(data) {
            if(data) {
                this.zIndex = "10000"
                this.bHeight = "70px"
                this.bTop = "30px"
                
            } else {
                this.zIndex = "10000"
                this.bHeight = "105px"
                this.bTop = "85px"
            }
        }

}