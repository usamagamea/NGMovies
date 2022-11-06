import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hasError: boolean = false;
  fieldConfirm: boolean = false;
  errorMessage: string = '';
  private unsubscribe: Subscription[] = [];
  constructor(private auth: AuthService, private route: Router) {}
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  toggleConfirm() {
    this.fieldConfirm = !this.fieldConfirm;
  }

  ngOnInit(): void {}
  submit(registerForm: FormGroup) {
    if (registerForm.valid) {
      this.auth.register(registerForm.value).subscribe({
        next: (res: any) => {
          if (res.status === 'success') {
            this.route.navigate(['/login']);
          } else {
            this.hasError = true;
            this.errorMessage = res?.message.email;
          }
        },
      });
    }
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((subscribe) => subscribe.unsubscribe());
  }
}
