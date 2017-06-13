import { Component, AfterViewInit, OnInit } from '@angular/core'
import { SliderService } from './shared/slider.service'
declare var jQuery:any

@Component({
    selector: 'slider',
    template: `
        <div class="container sliderMain">
            <ul class="bxslider">
                <li class="sliderContainer" *ngFor="let slide of slides"><img [src]="slide.imageUrl">
                    <span class="sliderBox">
                        <h3>{{slide.title}}</h3>
                        <p>{{slide.description}}</p>
            
                    </span>
                </li>
            </ul>
        </div>
        `,
        styles:[`
            .sliderBox{
                position: absolute;
                top: 0px;
                right: 5%;
                min-width: 470px;
                margin-right: 20px;
                background: rgba(102, 102, 102, 0.65);
                z-index: 999;
                padding: 10px;
                top: 17%;
            }

            @media screen and (max-width:760px) and (min-width:320px){
               .sliderBox{
                    top: 60%;
                    margin-right: 16px;
                    left: 0%;
                    min-width: 94%;
                    margin: 0px 10px;
                }

                .sliderContainer:after{
                    background-image: linear-gradient(to bottom, transparent 34%, #a7a495 47%) !important;
                    background-image: -webkit-linear-gradient(to bottom, transparent 34%, #a7a495 47%) !important;
                    height: 320px !important;
                }
            }

            .sliderBox h3{
                font-weight:500;
                margin-top: 10px;
                text-transform:uppercase;
            }

            .sliderContainer:after{
                display: block;
                position: relative;
                background-image: linear-gradient(to right, transparent 30%, #a7a495 58%), linear-gradient(to left, transparent 80%, #a7a495 95%);
                background-image: -webkit-linear-gradient(to right, transparent 30%, #a7a495 58%), -webkit-linear-gradient(to left, transparent 80%, #a7a495 95%);
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
    }

}