import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import { IMenu, IUrl } from './nav.model'
// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class NavService{

    private menusUrl: string = './app/apidata/menudata.json';  // URL to web API
    //https://www.malaysia.gov.my/public/cms/service/homepage_menu/en/?format=json
    //https://www.youtube.com/watch?v=oLtwPzr_8uA&spfreload=10
    constructor(private http:Http){
      
    }

    getMenuData():Observable<IMenu[]>{
        return this.http.get(this.menusUrl)
            .map((response:Response) => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

}
