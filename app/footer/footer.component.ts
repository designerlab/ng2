import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { FooterService } from './footer.service'
import { Router } from '@angular/router'
import {TranslateService, LangChangeEvent } from '@ngx-translate/core'


@Component({
    selector: 'footer',
    templateUrl:'./app/footer/footer.component.html',
    styles:[`
        .primary {
            background-color: #1ebebc;
            color: #fff;
        }
        .icon-social {
            position: inherit;
            display: inline-block;
            z-index: 1;
            background-color: #ffffff;
            font-size: 1em;
            color: #1ebebc;
            width: 29px;
            height: 28px;

            text-align: center;
            margin: 0;
            border-radius: 50%;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            -o-border-radius: 50%;
            transition: all 0.4s ease-in-out;
            -moz-transition: all 0.4s ease-in-out;
            -webkit-transition: all 0.4s ease-in-out;
            -o-transition: all 0.4s ease-in-out;
        }
        
        .social_icon_bg {
            font-size: 20px;
            color: white;
            cursor: pointer;
        }
       
    `]
})

export class FooterComponent{
     footer:any[]
     ftsociallink:any[]

    constructor(private footerService: FooterService, private translate:TranslateService, private router:Router){
        this.lang = translate.currentLang;
        translate.onLangChange.subscribe((event: LangChangeEvent) => {

        let myLang = translate.currentLang;
        
        if (myLang == "en") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.lang = "en"
                this.getFooter()
            });
            // this.router.navigateByUrl('public')
        }
        if (myLang == "ms") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.lang = "ms"
                this.getFooter()
            });
            // this.router.navigateByUrl('public')
        }
    });
        
}

  lang = this.lang;
    ngOnInit(){
        // debugger
      this.footerService.getFooterData(this.lang)
            .subscribe(resFooterData => {
                this.footer = resFooterData;
            });   
    }
     getFooter() {
         this.footerService.getFooterData(this.lang)
        .subscribe(resFooterData => {
                this.footer = resFooterData                
            }); 
    }
}

