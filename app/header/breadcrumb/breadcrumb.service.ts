import { Injectable } from '@angular/core'

@Injectable()

export class BreadcrumbService{

    getBreadcrumb(){
        return breadcrumb
    }
}

  let breadcrumb = {
        id: 1,
        name: "",
        url: ""
    }