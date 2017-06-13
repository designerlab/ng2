import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { RegisterComponent } from './register.component'


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(userRoutes)

    ],
    declarations:[
        ProfileComponent,
        RegisterComponent
    ],
    providers:[]
})

export class UserModule{

}