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
        
        .top-menu-list li a{
            cursor:pointer;
        }

        .container {
            padding-top: 10px;
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
        translate.use('ms');

         if(translate.getDefaultLang() == "ms"){
             this.currlang = "English"
         }else{
             this.currlang = "Bahasa Malaysia"
         }
    }

    isActive: boolean = true;
    
    currlang:string = this.currlang
   
    toggle() {
        this.isActive = !this.isActive;
        if(this.isActive){
            this.currlang = "English"
            this.translate.use('ms')
        }
        else{
            this.currlang = "Bahasa Malaysia"
            this.translate.use('en')
        }
            
     }



    showConfBar(){
        this.edited = !(this.edited)
        this.topNavClick.emit(this.edited);
    }

    langEventChange(data){
        console.log(data)
    }

}
