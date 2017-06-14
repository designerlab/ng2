import { Injectable } from '@angular/core'
import { IUser } from './user.model'

@Injectable()

export class AuthService{
    currentUser:IUser
    registerCitizenForm(kad_pengenalan_my:string, nama_penuh:string){
        this.currentUser = {
            id:1,
            kad_pengenalan_my: 'helo',
            nama_penuh: 'hell'
        }
    }

}