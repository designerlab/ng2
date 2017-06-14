import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'


@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)

    ],
    declarations:[
        ProfileComponent,
        RegisterComponent,
        LoginComponent
    ],
    providers:[]
})

export class UserModule{

}