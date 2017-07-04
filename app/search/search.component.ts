import { Component } from '@angular/core'


@Component({
    selector: 'search',
    templateUrl:'./app/search/search.component.html',
    styles:[
    `
     
    `
  ]
})

export class SearchComponent{
     getTheme(){
            return localStorage.getItem('themeColor')
        }
}