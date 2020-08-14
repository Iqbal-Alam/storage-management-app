import { FieldConfig, Validator } from "../field.interface";
import { Injectable } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class FormControlService {

  constructor(private _fb:FormBuilder) { }

  toFormGroup(fieldList:FieldConfig[]){
    const group = this._fb.group({});
    // const field = this.filterJson(fieldList);
    // console.log('this.fields',this.fields);
    fieldList?.forEach(field => {
      // console.log('field',field);
      if (field.type === "button") return;
      const control = this._fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }
}
