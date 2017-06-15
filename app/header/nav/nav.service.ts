import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()

export class NavService{

    private menusUrl: string = './app/apidata/menudata.json';  // URL to web API
    //https://www.malaysia.gov.my/public/cms/service/homepage_menu/en/?format=json
    //https://www.youtube.com/watch?v=oLtwPzr_8uA&spfreload=10
    constructor(private http:Http){
      
    }

    getMenuData(){
        return this.http.get(this.menusUrl)
            .map((response:Response) => response.json())
    }
    getMenus():Observable<any[]>{

        return this.http.get(this.menusUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
        // let subject = new Subject()
        // setTimeout(()=>{subject.next(MENUS); subject.complete(); }, 100)
        // return subject
    }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response) {
    return Observable.throw(error.statusText);
  }




}
