export interface Validator {
    name: string;
    validator: any;
    message: string;
}
export interface FieldConfig {
    fieldKey?: string;
    fieldLabel?: string;
    fieldType?: string;
    fieldValue?: any;
    fieldOptions?: any[];
    fieldDisabled:string;
    fieldRequired:string;
    fieldUiIndex:string;
    fieldValidations:Validator[];
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: Validator[];
}