import { Injectable, Inject } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import { IMenu, IUrl } from './nav.model'


// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class NavService{
    private menuUrl:string;
    constructor(private http:Http){
        
    }

    //private menusUrl: string = this.config.urlMenu;  // URL to web API

    getMenuData(lang: string):Observable<IMenu[]>{
        return this.http.get('./app/apidata/menudata-'+lang+'.json')
            .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}
