import { Injectable, Inject} from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import { ISlider, IResult } from '../slider.model'
import { Location } from '@angular/common'
import { APP_CONFIG, IAppConfig } from '../../config/app.config';
import {TranslateService, LangChangeEvent} from '@ngx-translate/core'
import { Router } from '@angular/router'


// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class SliderService{
    private sliderUrl:string;
    route: string;
    constructor(private http:Http, @Inject(APP_CONFIG) private config: IAppConfig, private translate: TranslateService, location: Location, private router: Router){ 
    translate.get('HOME').subscribe((res: any) => {
        this.sliderUrl = res.SLIDERURL;
      //=> 'hello world'
    });
    translate.onLangChange.subscribe((event: LangChangeEvent) => {

        var myLang = translate.currentLang;
        
        if (myLang == "en") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.sliderUrl = res.SLIDERURL;
                //localStorageService.set('lang','en')
                
            });
            console.log(this.sliderUrl)
            this.router.navigate([this.router.url])
           // this.slides = resSliderData;
        }
        if (myLang == "ms") {
            
            translate.get('HOME').subscribe((res: any) => {
                this.sliderUrl = res.SLIDERURL;
                //localStorageService.set('lang','en')
            });
            console.log(this.sliderUrl)
            this.router.navigate([this.router.url])
        }
    });
      
    }
    
    //private sliderUrl: string = this.config.urlSlider;
    

     

    getSliderData():Observable<ISlider[]>{
        return this.http.get(this.sliderUrl)
            .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}