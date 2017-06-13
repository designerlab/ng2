import { Component } from '@angular/core'

@Component({
    selector: 'nav-bar',
    templateUrl: './app/header/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size:15px;}
        li > a.active {color:#F97924;}
        #searchForm { margin-right:100px;}
        @media (max-width:1200px){#searchForm {display:none;} }\
        .top-nav{
            padding-top:0px;
        }
        .navbar-default{
            background:#fff;
            height:60px;
        }
       
    `]

})

export class NavBarComponent{

}