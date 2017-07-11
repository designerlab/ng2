import { Component, Output, EventEmitter, OnInit, AfterViewChecked } from '@angular/core'
import { SliderService } from './shared/slider.service'
import { ISlider, IResult } from './slider.model'
import { Router } from '@angular/router'
import {TranslateService, LangChangeEvent } from '@ngx-translate/core'
import { BreadcrumbService } from '../header/breadcrumb/breadcrumb.service'

declare var jQuery:any

@Component({
    selector: 'slider',
    templateUrl: './app/slider/slider.component.html',
    styleUrls: ['./app/css/slider.css']
    
})

export class SliderComponent implements AfterViewChecked {
    breadcrumb: any
    isValid: any
    @Output() langChange = new EventEmitter()
    ngAfterViewChecked() {
        jQuery(function(){
            jQuery('.bxslider').bxSlider({
                mode: 'fade',
                auto:true,
                pause:4000
            });
        });
        jQuery('.bx-wrapper').not(':eq(0)').hide();
    }

    slides:ISlider[]
    constructor(private sliderService: SliderService, private translate:TranslateService, private router:Router, private breadcrumbService:BreadcrumbService){
        this.lang = translate.currentLang;
        translate.onLangChange.subscribe((event: LangChangeEvent) => {

        let myLang = translate.currentLang;
        
        if (myLang == "en") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.lang = "en"
                this.getSlide()
            });
            // this.router.navigateByUrl('public')
        }
        if (myLang == "ms") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.lang = "ms"
                this.getSlide()
            });
            // this.router.navigateByUrl('public')
        }
    });
    }

    lang = this.lang;
    ngOnInit(){
        this.breadcrumb = this.breadcrumbService.getBreadcrumb()
        this.breadcrumb = this.breadcrumb.name = ""
        this.isValid = this.breadcrumbService.isValid = false
        this.sliderService.getSliderData(this.lang)
            .subscribe(resSliderData => {
                this.slides = resSliderData;
            });
    
         
    }

     

     getSlide() {
        this.sliderService.getSliderData(this.lang)
        .subscribe(resSliderData => {
                this.slides = resSliderData;
            })
            
    }


}