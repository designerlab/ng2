import { Component, OnInit } from '@angular/core'
import { TranslateService } from './translate/translate.service';
@Component({
    selector: 'events-app',
    template: `
        <top-nav class="top-nav-style" (topNavClick)="getExpand($event)" [style.z-index]="this.zIndex" [style.height]="this.bHeight"></top-nav>
        <nav-bar class="nav-bar-style" [style.top]="this.bTop"></nav-bar>
        <div class="xtra-space container-fluid">
            <div class="container">
                <div class="breadCrumb">
                    <h1>Title</h1>
                    <h4>Translate: Hello World</h4>
                    <div class="btn-group">
        <button *ngFor="let lang of supportedLanguages" (click)="selectLang(lang.value)" class="btn btn-default" [class.btn-primary]="isCurrentLang(lang.value)">
            {{ lang.display }}
        </button>
    </div>
    <div>
        <!--translate with pipe-->
        <p>
            Translate With Pipe: <strong>{{ 'title' | translate }}</strong>
        </p>

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

    translatedText: string
    supportedLanguages: any[]

      zIndex = "10000"
      bHeight = "70px"
      bTop = "30px" 

      constructor(private _translate: TranslateService){

      }
      ngOnInit() {
        // standing data
        this.supportedLanguages = [
        { display: 'English', value: 'en' },
        { display: 'Español', value: 'es' },
        ];

        // set current langage
        this.selectLang('es');
    }
    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText() {
        // refresh translation when language change
        this.translatedText = this._translate.instant('title');
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