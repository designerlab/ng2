import { Injectable } from '@angular/core'

@Injectable()

export class TopNavService{
    getUserMenu(){
        return USERMENU
    }

    getColors(){
        return COLORS
    }

    getFonts(){
        return FONTS
    }

}


const USERMENU = [{
        id: 1,
        name: "My Profile",
        url: ""
    },
    {
        id: 2,
        name: "InBox",
        url: ""
    }
]

const COLORS = [
        '5e7899',
        'e06000',
        '4f81c5',
        '982d57'
    ]

const FONTS = [
        'Roboto',
        'Arial',
        'Times New Roman'
    ]