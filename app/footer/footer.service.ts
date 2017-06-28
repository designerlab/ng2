import { Injectable, Inject} from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import { APP_CONFIG, IAppConfig } from '../config/app.config'

// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class FooterService{
    
    constructor(private http:Http, @Inject(APP_CONFIG) private config: IAppConfig){ 
      
    }
    
    private footerUrl: string = this.config.urlFooter;
    

     getFooterData(lang: string):Observable<any[]> {
      return this.http.get(this.footerUrl+'-'+lang+'.json')
                    .map((response:Response) => response.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}