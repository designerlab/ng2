import { Component, OnInit  } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
    templateUrl:'app/user/register.component.html',
    styles:[
    `
      em{
            float:right; color: #E05C65; padding-left:10px;
        }
      .error input { background-color: #E3C3C5; }
      .error ::-webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; } 
      .error :-ms-input-placeholder { color: #999; } 
    `
  ]
})

export class RegisterComponent{
      public citizenFormGrp:FormGroup
      private kad_pengenalan:FormControl
      private nama_penuh:FormControl


    citizenValue = true
    changeCitizen = true
    country_my = ''
    ngOnInit(){
          
          this.citizenFormGrp = new FormGroup({
            kad_pengenalan: new FormControl('',[Validators.required, Validators.pattern('^[0-9]{15}$')]),
            nama_penuh: new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]{1,30}$')]),
            emel: new FormControl('',[Validators.required, Validators.email]),
            telefon: new FormControl('',[Validators.required])
          })
        //   this.kad_pengenalan = new FormControl([this.kad_pengenalan, Validators.required, Validators.pattern('[a-zA-Z].*')])
        //   this.nama_penuh = new FormControl(this.nama_penuh, Validators.required)
       }


   chgeCitizen(){
    this.changeCitizen = this.citizenValue
   }

    citizenReg(formValues){        
        console.log(formValues)
    }   

    noncitizenReg(formValues){
        console.log(formValues)
    }

    isCitizen(){        
        return this.citizenValue
    }

    validateIC(){
        return this.citizenFormGrp.controls.kad_pengenalan.valid || this.citizenFormGrp.controls.kad_pengenalan.untouched
    }
    validateName(){
        return this.citizenFormGrp.controls.nama_penuh.valid || this.citizenFormGrp.controls.nama_penuh.untouched
    }
    validateEmail(){
        return this.citizenFormGrp.controls.nama_penuh.valid || this.citizenFormGrp.controls.nama_penuh.untouched
    }
    
}