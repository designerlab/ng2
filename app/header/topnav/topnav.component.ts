import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { AuthService } from '../../user/auth.service'
import {TranslateService} from '@ngx-translate/core';

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
    translatedText: string
    supportedLanguages: any[]

    @Input() edited = true
    @Output() topNavClick = new EventEmitter()
  
    constructor(private auth:AuthService, private translate: TranslateService){

        translate.addLangs(["en", "ms"]);
        translate.setDefaultLang('ms');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ms/) ? browserLang : 'ms');
    }



    showConfBar(){
        this.edited = !(this.edited)
        this.topNavClick.emit(this.edited);
    }

}
