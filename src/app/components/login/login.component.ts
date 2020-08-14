import { Component, OnInit, ViewChild } from '@angular/core';
declare var jQuery: any;
import { Router } from '@angular/router';  
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  
  constructor(private http:HttpClient, private formBuilder: FormBuilder,private _snackBar: MatSnackBar, private _router: Router) { 
  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }



  login(){
    // this._fs.sendPostRequest(this.loginForm.value, 'login').subscribe(
    //   res => {
    //     if(res.successMessage){
          this._snackBar.open('good', 'Dismiss', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });  
          console.log('hello');
          // this._router.navigateByUrl('/dashboard');
    //     }
    //     else if(res.errorMessage){
    //       this._snackBar.open(res.errorMessage, 'Dismiss', {
    //         duration: 2000,
    //         horizontalPosition: 'center',
    //         verticalPosition: 'top',
    //       }); 
    //     }
    //     else{
    //       this._snackBar.open(res, 'Dismiss', {
    //         duration: 2000,
    //         horizontalPosition: 'center',
    //         verticalPosition: 'top',
    //       });

    //       console.log('res',res);
    //     }
        
    //   }
    // );
  }

}
