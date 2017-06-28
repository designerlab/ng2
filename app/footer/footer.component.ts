import { Component, Output, EventEmitter, OnInit } from '@angular/core'
import { FooterService } from './footer.service'
import { Router } from '@angular/router'
import {TranslateService, LangChangeEvent } from '@ngx-translate/core'


@Component({
    selector: 'footer',
    templateUrl:'./app/footer/footer.component.html',
    styles:[`
        
    `]
})

export class FooterComponent{
     footer:any[]
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
      this.footerService.getFooterData(this.lang)
            .subscribe(resFooterData => {
                this.footer = resFooterData;
            });
    
         
    }

     

     getFooter() {
         this.footerService.getFooterData(this.lang)
        .subscribe(resFooterData => {
                this.footer = resFooterData;
            })
            
    }
}

