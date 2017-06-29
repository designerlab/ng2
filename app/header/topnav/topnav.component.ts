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

        button.bgColorBtn {
        padding: 5px 0px;
        margin: 0px 2px; }

        .bgColor0 {
        width: 20px;
        height: 20px;
        background: #00bdbb;
        border: 1px solid #00bdbb;
        margin: 0px;
        padding: 0px; }

        .colorPaletteActive {
        border-color: #fff !important; }

        .bgColor1 {
        width: 20px;
        height: 20px;
        background: #5e7899;
        border: 1px solid #5e7899;
        margin: 0px;
        padding: 0px; }

        .bgColor2 {
        width: 20px;
        height: 20px;
        background: #e06000;
        border: 1px solid #e06000;
        margin: 0px;
        padding: 0px; }

        .bgColor3 {
        width: 20px;
        height: 20px;
        background: #4f81c5;
        border: 1px solid #4f81c5;
        margin: 0px;
        padding: 0px; }

        .bgColor4 {
        width: 20px;
        height: 20px;
        background: #982d57;
        border: 1px solid #982d57;
        margin: 0px;
        padding: 0px; }
        
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
