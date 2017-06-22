import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    templateUrl:'app/user/register.component.html'
})

export class RegisterComponent{
    @Output() langChange = new EventEmitter()

    show = true;
    citizenValue = true;
    changeCitizen = true;
    country_my = '';
   chgeCitizen(){
    this.changeCitizen = this.citizenValue;
   }

    citizenReg(formValues){        
        console.log(formValues);
    }   

    noncitizenReg(formValues){
        console.log(formValues);
    }

    isCitizen(){
        return this.citizenValue;
    }

    getDisplay(){
        return "hidden"
    }
    
}