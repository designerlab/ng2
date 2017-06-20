import { Injectable, Inject } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import { IMenu, IUrl } from './nav.model'
import { APP_CONFIG, IAppConfig } from '../../config/app.config';

// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class NavService{

    constructor(private http:Http, @Inject(APP_CONFIG) private config: IAppConfig){
      
    }

    private menusUrl: string = this.config.urlMenu;  // URL to web API

    getMenuData():Observable<IMenu[]>{
        return this.http.get(this.menusUrl)
            .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}
