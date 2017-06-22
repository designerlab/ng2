import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { NavService } from './nav.service'
import {TranslateService, LangChangeEvent } from '@ngx-translate/core'

@Injectable()

export class MenuListResolver implements Resolve<any>{
    menuUrl:string
    constructor(private navService:NavService, private translate: TranslateService){
        translate.get('HOME').subscribe((res: any) => {
        this.menuUrl = res.MENUURL;
      //=> 'hello world'
    });
    }

    lang="en"
    resolve(){
        return this.navService.getMenuData(this.lang)
    }
}