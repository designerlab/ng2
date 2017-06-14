import { Component } from '@angular/core'

@Component({
    templateUrl:'app/user/register.component.html'
})

export class RegisterComponent{
    show = true;
    citizenValue = true;
    citizenReg(formValues){
        console.log(formValues);
    }

    noncitizenReg(formValues){
        console.log(formValues);
    }

    chgeCitizen(){    
     //this.citizenValue = !this.citizenValue;
    }

    getDisplay(){
        return "hidden"
    }
}