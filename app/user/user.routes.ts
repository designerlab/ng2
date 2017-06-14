import { ProfileComponent } from './profile.component'
import { RegisterComponent } from './register.component'
import { LoginComponent } from './login.component'

export const userRoutes = [
    {path:'profile', component: ProfileComponent},
     {path:'register', component: RegisterComponent},
      {path:'login', component: LoginComponent}
]