import { Injectable } from '@angular/core'

@Injectable()

export class BreadcrumbService{
    isValid:boolean
    getBreadcrumb(){
        return breadcrumb
    }

    getValid(){
        return isValid
    }
}


 let isValid = {
    value: false
 }

  let breadcrumb = {
    id: 1,
    name: "",
    url: ""
}

