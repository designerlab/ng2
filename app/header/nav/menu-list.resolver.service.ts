import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { NavService } from './nav.service'

@Injectable()

export class MenuListResolver implements Resolve<any>{
    constructor(private navService:NavService){

    }
    resolve(){
        return this.navService.getMenuData()
    }
}