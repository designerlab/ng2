import { Injectable, Inject} from '@angular/core'
import { Subject, Observable } from 'rxjs/RX'
import { Http, Response} from '@angular/http'
import { APP_CONFIG, IAppConfig } from '../../config/app.config'
import {ActivatedRoute} from '@angular/router'

// Import RxJs required methods
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class ArticleService{
     productID: string
    constructor(private http:Http, @Inject(APP_CONFIG) private config: IAppConfig, route: ActivatedRoute){ 
      this.productID = route.snapshot.params['id']
    }
    
    private articleUrl: string = this.config.urlArticle;
    

     getArticleData(lang: string):Observable<any[]> {
      return this.http.get(this.articleUrl+'-2-'+lang+'.json')
                    .map((response:Response) => response.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}