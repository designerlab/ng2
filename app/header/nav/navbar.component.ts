import { Component, OnInit } from '@angular/core'
import { AuthService } from '../../user/auth.service'
import { NavService } from './nav.service'
import { ToastrService } from '../../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IMenu, IUrl } from './nav.model'

@Component({
    selector: 'nav-bar',
    templateUrl: './app/header/nav/navbar.component.html',
    styles:[`
        
        .nav.navbar-nav {font-size:15px; padding:10px 0px;}
        li > a.active {color:#F97924;}
        .nav > li{
            position: relative;
            display: inline-block;
            margin-top: -10px;
            height: 60px;
        }
        #searchForm { margin-right:100px;}
        @media (max-width:1200px){#searchForm {display:none;} }
        .top-nav{
            padding-top:0px;
        }
        .navbar-default{
            background:#fff;
            height:60px;
        }
        .navbar-default .navbar-nav>li>a{
            color:#000 !important;
            padding: 20px;
            color:#333333;
            display:block;
            padding:0px 40px;
            text-decoration:none;
            float: left;
            height: 60px;
            line-height: 60px;
        }

        .navbar-default .navbar-nav>li>a:hover{
            color:#fff !important;
        }

        .navbar-brand {
            float: left;
            padding: 10px 15px;
            font-size: 29px;
            line-height: 40px;
            height: 60px;
        }
       
    `]

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