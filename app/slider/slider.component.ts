import { Component, AfterViewInit, OnInit } from '@angular/core'
import { SliderService } from './shared/slider.service'
declare var jQuery:any

@Component({
    selector: 'slider',
    template: `
        <ul class="bxslider">
            <li class="sliderContainer" *ngFor="let slide of slides"><img [src]="slide.imageUrl">
                <span class="sliderBox">
                    <h1>{{slide.title}}</h1>
                    <h2>{{slide.description}}</h2>
        
                </span>
            </li>
        </ul>
        `,
        styles:[`
            .sliderBox{
                position: absolute;
                top: 0px;
                right: 5%;
                margin-right: 20px;
                background: rgba(102, 102, 102, 0.65);
                z-index: 999;
                padding: 10px;
                top: 17%;
            }

            .sliderContainer:after{
                display: block;
                position: relative;
                background-image: linear-gradient(to right, transparent 45%, #a7a495 60%), linear-gradient(to left, transparent 80%, #a7a495 95%);
                height: 500px;
                width: 100%;
                content: '';
                margin-top: -43.8%;
            }

        `]
})

export class SliderComponent implements AfterViewInit {
    ngAfterViewInit() {
        jQuery(function(){
             jQuery('.bxslider').bxSlider();
        })
    }

    slides:any[]
    constructor(private sliderService: SliderService){
    
    }

    ngOnInit(){
         this.slides = this.sliderService.getEvents();
         console.log(this.slides);
    }

}