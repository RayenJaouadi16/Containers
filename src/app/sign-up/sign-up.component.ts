import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm:any
  email:any
  password:any
  radButton:any
  FirstName:any
  LastName:any
  DateOfBirth:any
  Adresse:any
  Numero:any
  mdp:any
  error:any
  constructor(  public authService: AuthService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      mdp: new FormControl('', Validators.required),
    })
  }
  signup(){}

}
