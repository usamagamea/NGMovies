import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hasError: boolean = false;
  fieldConfirm: boolean = false;
  errorMessage: string = '';
  private unsubscribe: Subscription[] = [];
  constructor(private auth: AuthService, private route: Router) {}
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  toggleConfirm() {
    this.fieldConfirm = !this.fieldConfirm;
  }

  ngOnInit(): void {}
  submit(loginForm: FormGroup) {
    if (loginForm.valid) {
      this.auth.login(loginForm.value).subscribe({
        next: (res: any) => {
          if (res.status === 'success') {
            localStorage.setItem('userToken', res.authorisation.token);
            this.auth.saveCurrentUser();
            this.route.navigate(['/list']);
          } else {
            this.hasError = true;
          }
        },
        error: (err: any) => {
          this.hasError = true;
          this.errorMessage = err.error?.message;
        },
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((subscribe) => subscribe.unsubscribe());
  }
}
