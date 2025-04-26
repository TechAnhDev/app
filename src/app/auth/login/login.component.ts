import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ServiceService } from '~/app/core/service.service';
import { ConstantDef } from '~/app/core/constantDef';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private spinner: NgxSpinnerService,
    private services: ServiceService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}
  login() {
    if (this.loginForm.valid) {
      const data = {
        username: this.loginForm.value?.username.trim(),
        password: this.loginForm.value?.password.trim(),
      };
      this.services.login(data).subscribe(
        (data: any) => {
          if (data.status == ConstantDef.STATUS_SUCCES) {
            this.router.navigate(['/home']);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
