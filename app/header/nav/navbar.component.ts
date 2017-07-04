import { Component, OnInit, AfterViewChecked } from '@angular/core'
import { AuthService } from '../../user/auth.service'
import { NavService } from './nav.service'
import { ToastrService } from '../../common/toastr.service'
import { IMenu, IUrl } from './nav.model'
import {TranslateService, LangChangeEvent } from '@ngx-translate/core'
declare var jQuery:any

@Component({
    selector: 'nav-bar',
    templateUrl: './app/header/nav/navbar.component.html',
    styleUrls:['./app/css/nav.css'],
    styles:[`
        .activeLink{
            background:{themeColor} !important;
            color: #fff !important;
        }
    `]

})

export class NavBarComponent implements OnInit, AfterViewChecked{
    menus:IMenu[]
    lang = "en"
    themeColor = "#ff0"
    constructor(private navService: NavService, private toastr:ToastrService, private translate:TranslateService){
        translate.onLangChange.subscribe((event: LangChangeEvent) => {

        var myLang = translate.currentLang;
        
        if (myLang == "en") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.lang = "en"
                this.getMenu()
            });
           
        }
        if (myLang == "ms") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.lang = "ms"
                this.getMenu()
            });
        }
    });
}

    ngAfterViewChecked() {
        
        jQuery(function(){
            jQuery("#main-menu > li > a").css({'backgroundColor':'#fff', 'color':'#000'});
            jQuery('#main-menu > li > a.active').css('background-color',localStorage.getItem('themeColor'));
   
            jQuery("#main-menu > li > a").mouseover(function() {
                jQuery(this).css("background-color","red");
            }).mouseout(function() {
                jQuery(this).css("background-color","transparent");
            });
        });
  
    }

     ngOnInit(){
         this.navService.getMenuData(this.lang)
            .subscribe(resMenuData => this.menus = resMenuData)
      
    }

    getMenu(){
        this.navService.getMenuData(this.lang)
            .subscribe(resMenuData => this.menus = resMenuData)
    }

    getTheme(){
        return localStorage.getItem('themeColor')
    }


}