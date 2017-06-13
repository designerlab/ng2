import { Component } from '@angular/core'

@Component({
    templateUrl:'app/user/register.component.html'
})

export class RegisterComponent{
    citizenReg(formValues){
        console.log(formValues);
    }
}