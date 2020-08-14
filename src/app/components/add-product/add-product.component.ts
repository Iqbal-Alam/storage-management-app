import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { Validators } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { DynamicFormComponent } from "../../core/dynamic-form/dynamic-form.component";
import { AppService } from "../../services/app.service";


@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  formName="login_form";
  regConfig: FieldConfig[];
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  

  constructor(private _appService:AppService){
    
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    
  }

  getFormField(){
    this._appService.getFormFields().subscribe((res:any[]) => {
      console.log('response', res[0].formName);
      let abc = res.filter(x => x.formName === this.formName);
      this.regConfig = abc[0].fields;
      // regConfig: FieldConfig[] = 
      // return this.regConfigs;
      console.log('this.regConfigs',this.regConfig);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  

  // regConfig: FieldConfig[] = this.regConfigs == [] ? this.getFormField() : this.regConfigs ;
  // [
  //   {
  //     type: "input",
  //     label: "Username",
  //     inputType: "text",
  //     name: "name",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Name Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern("^[a-zA-Z]+$"),
  //         message: "Accept only text"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Email Address",
  //     inputType: "email",
  //     name: "email",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Email Required"
  //       },
  //       {
  //         name: "pattern",
  //         validator: Validators.pattern(
  //           "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
  //         ),
  //         message: "Invalid email"
  //       }
  //     ]
  //   },
  //   {
  //     type: "input",
  //     label: "Password",
  //     inputType: "password",
  //     name: "password",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Password Required"
  //       }
  //     ]
  //   },
  //   {
  //     type: "radiobutton",
  //     label: "Gender",
  //     name: "gender",
  //     options: ["Male", "Female"],
  //     value: "Male"
  //   },
  //   {
  //     type: "date",
  //     label: "DOB",
  //     name: "dob",
  //     validations: [
  //       {
  //         name: "required",
  //         validator: Validators.required,
  //         message: "Date of Birth Required"
  //       }
  //     ]
  //   },
  //   {
  //     type: "select",
  //     label: "Country",
  //     name: "country",
  //     value: "UK",
  //     options: ["India", "UAE", "UK", "US"]
  //   },
  //   {
  //     type: "checkbox",
  //     label: "Accept Terms",
  //     name: "term",
  //     value: true
  //   },
  //   {
  //     type: "button",
  //     label: "SUBMIT"
  //   }
  // ];


  submit(value: any) {}
}
