import { Component, Input, Output, EventEmitter } from '@angular/core'
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

    @Output() langChange = new EventEmitter()

      public citizenFormGrp:FormGroup
      public noncitizenFormGrp:FormGroup
      private kad_pengenalan:FormControl
      private nama_penuh:FormControl
      private emel:FormControl
      private telefon:FormControl
      private country:FormControl
      private passport:FormControl


    citizenValue = true
    changeCitizen = true
    country_my = ''
    ngOnInit(){
          this.kad_pengenalan = new FormControl('',[Validators.required, Validators.pattern('^[0-9]{15}$')]),
          this.nama_penuh = new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z ]{1,30}$')]),
          this.emel = new FormControl('',[Validators.required, Validators.email]),
          this.telefon = new FormControl('',[Validators.required, Validators.pattern('^[0-9]{14}$')]),
          this.country = new FormControl('',[Validators.required]),
          this.passport = new FormControl('', [Validators.required, Validators.pattern('^[0-9a-zA-Z]{8,12}$')]),
          this.citizenFormGrp = new FormGroup({
            kad_pengenalan: this.kad_pengenalan,
            nama_penuh: this.nama_penuh,
            emel: this.emel,
            telefon: this.telefon
          })
          this.noncitizenFormGrp = new FormGroup({
              country : this.country,
              passport : this.passport
          })
        //   this.kad_pengenalan = new FormControl([this.kad_pengenalan, Validators.required, Validators.pattern('[a-zA-Z].*')])
        //   this.nama_penuh = new FormControl(this.nama_penuh, Validators.required)
       }


    

    show = true;
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
        return this.kad_pengenalan.valid || this.kad_pengenalan.untouched
    }
    validateName(){
        return this.nama_penuh.valid || this.nama_penuh.untouched
    }
    validateEmail(){
        return this.emel.valid || this.emel.untouched
    }
    validateTelefon(){
        return this.telefon.valid || this.telefon.untouched
    }
    validateCountry(){
        debugger
        return this.country.valid || this.country.untouched
    }
    validatePassport(){
        return this.passport.valid || this.passport.untouched
    }

    _numbersOnly(event: any) {
        debugger
        let pattern = /^[0-9]{15}$/
        let inputChar = String.fromCharCode(event.charCode)

        if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
        }
    }
    _namesOnly(event: any) {
        debugger
        let pattern = /^[a-zA-Z ]{1,30}$/
        let inputChar = String.fromCharCode(event.charCode)

        if (!pattern.test(inputChar)) {
        // invalid character, prevent input
        event.preventDefault();
        }
    }


}