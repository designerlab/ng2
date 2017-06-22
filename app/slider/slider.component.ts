import { Component,  Output, EventEmitter, AfterViewInit, OnInit, AfterViewChecked } from '@angular/core'
import { SliderService } from './shared/slider.service'
import { ActivatedRoute } from '@angular/router'
import { ISlider, IResult } from './slider.model'
import {TranslateService, LangChangeEvent } from '@ngx-translate/core'

declare var jQuery:any

@Component({
    selector: 'slider',
    templateUrl: './app/slider/slider.component.html',
    styleUrls: ['./app/css/slider.css']
})

export class SliderComponent implements AfterViewChecked {
    @Output() langChange = new EventEmitter()
    ngAfterViewChecked() {
        jQuery(function(){
            jQuery('.bxslider').bxSlider();
        })
    }

    slides:ISlider[]
    constructor(private sliderService: SliderService, private route:ActivatedRoute, private translate:TranslateService){
      
    }

    ngOnInit(){
      this.sliderService.getSliderData()
            .subscribe(resSliderData => {
                this.slides = resSliderData;
            });
         
    }


}