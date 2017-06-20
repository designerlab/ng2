import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../user/auth.service'
import { NavService } from './nav.service'
import { ToastrService } from '../../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IMenu, IUrl } from './nav.model'

@Component({
    selector: 'nav-bar',
    templateUrl: './app/header/nav/navbar.component.html',
    styleUrls:['./app/css/nav.css']

})

export class NavBarComponent implements OnInit{
    menus:IMenu[]
    constructor(private navService: NavService, private toastr:ToastrService, private route:ActivatedRoute){

    }
     ngOnInit(){
         this.navService.getMenuData()
            .subscribe(resMenuData => this.menus = resMenuData)
    }


}