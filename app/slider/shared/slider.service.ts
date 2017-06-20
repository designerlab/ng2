import { Injectable, Inject } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import { ISlider, IResult } from '../slider.model'
import { APP_CONFIG, IAppConfig } from '../../config/app.config';
// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class SliderService{
    
    constructor(private http:Http, @Inject(APP_CONFIG) private config: IAppConfig){ 
    
    }
    
    private sliderUrl: string = this.config.urlSlider;

    getSliderData():Observable<ISlider[]>{
        return this.http.get(this.sliderUrl)
            .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}