import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, Validator } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {

//TODO: Temporal
  nombreApellidoPattern:string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  miFormulario: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.nombreApellidoPattern)]],
    email:['',[Validators.required, Validators.pattern(this.emailPattern)]],

  })
  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {

    // this.miFormulario.reset({
    //   nombre:'Mateo Rojas',
    //   email:'sample@example.com',
    // })
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid
            && this.miFormulario.get(campo)?.touched
            && this.miFormulario.get(campo)?.dirty;
  }

  submitFormulario(){

    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
